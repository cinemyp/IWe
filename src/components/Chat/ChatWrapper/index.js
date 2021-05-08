import style from "./style.module.css";
const ChatWrapper = ({ children }) => {
  return <div className={style["chat_wrapper"]}>{children}</div>;
};

export default ChatWrapper;
