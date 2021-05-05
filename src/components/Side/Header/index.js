import s from "./style.module.css";

const Header = ({ name, img, onClickLogout }) => {
  return (
    <div className={s.header}>
      <div className={s.avatar}>
        <img src={img} alt="User Photo" />
      </div>
      <div className={s.title}>{name}</div>
      <div onClick={onClickLogout} className={s.logout}>
        Выйти
      </div>
    </div>
  );
};

export default Header;
