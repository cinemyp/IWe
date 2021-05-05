import Side from "../Side";
import style from "./style.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style["layout"]}>
      <Side />
      {children}
    </div>
  );
};

export default Layout;
