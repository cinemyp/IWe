import Header from "./Header";
import Menu from "./Menu";
import Messages from "./Messages";
import s from "./style.module.css";

const Side = () => {
  return (
    <div className={s.side}>
      <Header name={"Тимур"} />
      <Menu />
      <Messages />
    </div>
  );
};

export default Side;
