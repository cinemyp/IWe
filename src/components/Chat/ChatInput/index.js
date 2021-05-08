import style from "./style.module.css";

const ChatInput = ({ message, onMessageUpdate, onSubmit }) => {
  return (
    <form className={style["chat_input"]} onSubmit={onSubmit}>
      <textarea
        name="message"
        value={message}
        autoComplete="off"
        placeholder="Message..."
        onChange={onMessageUpdate}
        className={style["chat_input__input"]}
        maxLength={255}
      />
      <button className={style["chat_input__button"]}>Send</button>
    </form>
  );
};

export default ChatInput;
