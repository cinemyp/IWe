import { useEffect, useRef, useState } from "react";
import ChatInputContainer from "../../containers/ChatInputContainer";
import ChatWindow from "./ChatWindow";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { sendMessage } from "../../services/API";
import { useDispatch, useSelector } from "react-redux";
import {
  openDialogAsync,
  selectCurrentDialogData,
} from "../../store/dialog/dialog";
import { selectCurrentProfileData } from "../../store/profiles/currentProfile";
import ChatWrapper from "./ChatWrapper";

const Chat = () => {
  const dispatch = useDispatch();

  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const latestChat = useRef(null);
  const dialog = useSelector(selectCurrentDialogData);
  const currentProfile = useSelector(selectCurrentProfileData);

  const bottomChat = useRef();

  latestChat.current = chat;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:44382/hubs/chat", {
        accessTokenFactory: () => sessionStorage.getItem("idToken"),
      })
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection && dialog.id) {
      connection
        .start()
        .then((result) => {
          console.log("Connected!");
          dispatch(openDialogAsync(dialog.id));

          connection.on("receiveMessage", (message) => {
            const updatedChat = [...latestChat.current];
            updatedChat.push(message);
            setChat(updatedChat);
          });
        })
        .catch((error) => {
          console.log("Connection failed: ", error);
        });
    }
  }, [connection, dialog.id]);

  useEffect(() => {
    if (dialog.messages) {
      setChat(dialog.messages);
    }
  }, [dialog]);

  useEffect(() => {
    bottomChat.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleSendMessage = (message) => {
    const chatMessage = {
      userId: currentProfile.id,
      conversationId: dialog.id,
      messageText: message,
    };
    if (connection.connectionStarted) {
      try {
        sendMessage(chatMessage);

        //await connection.send("SendMessage", chatMessage);
      } catch (error) {
        console.log("Error in connection", error);
      }
    } else {
      alert("No connection to server yet");
    }
  };

  return (
    <ChatWrapper>
      <ChatWindow
        bottom={bottomChat}
        chat={chat}
        userChat={currentProfile.firstName}
      />
      <ChatInputContainer sendMessage={handleSendMessage} />
    </ChatWrapper>
  );
};

export default Chat;
