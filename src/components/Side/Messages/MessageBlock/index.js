import s from "./style.module.css";

const MessageBlock = ({ img, name, text, onClickBlock }) => {
  return (
    <div onClick={onClickBlock} className={s.messageBlock}>
      <div className={s.avatar}>
        <img src={img} alt="" />
      </div>
      <div className={s.message}>
        <div className={s.user}>{name}</div>
        <div className={s.text}>{text}</div>
      </div>
    </div>
  );
};

export default MessageBlock;
