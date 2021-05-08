import classNames from "classnames";
import style from "./style.module.css";

const ChatMessage = ({ user, message, own }) => {
  return (
    <div className={classNames(style["message"], { [style["own"]]: own })}>
      <div className={style["message__user"]}>{user}</div>

      <div className={style["message__text"]}>{message}</div>
    </div>
  );
};
export default ChatMessage;
