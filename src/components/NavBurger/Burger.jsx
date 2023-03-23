import React, { useState } from "react";
import "./style.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo1 from "../../assets/FitnesLogo.png";

export const navBurger = [
  {
    id: 1,
    title: "О нас",
  },
  {
    id: 2,
    title: "Галерея",
  },
  {
    id: 3,
    title: "Абонементы",
  },
  {
    id: 4,
    title: "Тренеры",
  },
  {
    id: 5,
    title: "Контакты",
  },
  {
    id: 6,
    title: "+7 (496) 416-19-16",
  },
];

const Burger = () => {
  const [open, setOpen] = useState(false);

  function ClickBtn(event) {
    if (setOpen(event.target.className)) {
      setOpen(!open);
    }
  }

  return (
    <header>
      <nav className={`wrapper-nav ${open ? "active" : ""}`}>
        <div className="top-nav">
          <img className="logoImg" src={Logo1} alt="" />
          <button className="click" onClick={() => setOpen(!open)}>
            {open ? (
              <CloseIcon style={{ fontSize: "30px" }} />
            ) : (
              <MenuIcon style={{ fontSize: "30px" }} />
            )}
          </button>
        </div>
        <div className="inner-nav">
          {navBurger.map((res) => (
            <p
              key={res.id}
              onClick={ClickBtn}
              activeclassname="active"
              className="navTitle"
              to={res.navTitle}
            >
              <p>{res.title}</p>
            </p>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Burger;
