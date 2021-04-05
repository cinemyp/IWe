import { useState } from "react";
import cn from "classnames";
import s from "./style.module.css";

const MENU = ["Matches", "Messages"];

const Menu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleClickMenuItem = (key) => {
    setSelectedMenuItem(key);
  };

  return (
    <div className={s.menu}>
      {MENU.map((item, index) => (
        <div
          key={index}
          className={cn(s.menuItem, { [s.active]: index === selectedMenuItem })}
          onClick={() => handleClickMenuItem(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Menu;
