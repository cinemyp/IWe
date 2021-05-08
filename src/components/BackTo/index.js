import { Link } from "react-router-dom";
import style from "./style.module.css";

const BackTo = ({ to }) => {
  return (
    <div className={style["back_to"]}>
      <Link to={to} className={style["back_to__link"]}>
        Вернуться назад
      </Link>
    </div>
  );
};
export default BackTo;
