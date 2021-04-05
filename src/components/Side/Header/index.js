import s from "./style.module.css";

const Header = ({ name, img }) => {
  return (
    <div className={s.header}>
      <div className={s.avatar}>
        <img src={img} alt="User Photo" />
      </div>
      <div className={s.title}>{name}</div>
    </div>
  );
};

export default Header;
