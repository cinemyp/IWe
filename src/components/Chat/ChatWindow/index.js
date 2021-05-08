import ChatMessage from "../ChatMessage";
import style from "./style.module.css";

const ChatWindow = ({ chat, userChat, bottom }) => {
  const messages = chat.map(({ user, messageText }, index) => (
    <ChatMessage
      key={index}
      user={user.firstName}
      message={messageText}
      own={userChat === user.firstName}
    />
  ));
  return (
    <div className={style["messages"]}>
      {messages}
      <div ref={bottom}></div>
    </div>
  );
};

export default ChatWindow;
