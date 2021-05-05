import { useState } from "react";
import cn from "classnames";
import s from "./style.module.css";

const MENU = ["Matches", "Messages"];

const Menu = ({ onClickMenuItem, selectedMenuItem }) => {
  return (
    <div className={s.menu}>
      {MENU.map((item, index) => (
        <div
          key={index}
          className={cn(s.menuItem, { [s.active]: item === selectedMenuItem })}
          onClick={() => onClickMenuItem(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Menu;
