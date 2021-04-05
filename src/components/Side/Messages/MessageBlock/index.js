import s from "./style.module.css";

const MessageBlock = ({ img, name, text }) => {
  return (
    <div className={s.messageBlock}>
      <div className={s.avatar}>
        <img src="" alt="" />
      </div>
      <div className={s.message}>
        <div className={s.user}>{name}</div>
        <div className={s.text}>{text}</div>
      </div>
    </div>
  );
};

export default MessageBlock;
