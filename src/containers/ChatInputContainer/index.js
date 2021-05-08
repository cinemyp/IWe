import { useState } from "react";
import ChatInput from "../../components/Chat/ChatInput";

const ChatInputContainer = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  const handleMessageUpdate = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const isMessageProvided = message && message !== "";

    if (isMessageProvided) {
      sendMessage(message);
      setMessage("");
    } else {
      alert("Please insert a message.");
    }
  };
  return (
    <>
      <ChatInput
        message={message}
        onMessageUpdate={handleMessageUpdate}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ChatInputContainer;
