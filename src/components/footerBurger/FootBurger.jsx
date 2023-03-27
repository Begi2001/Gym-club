import React, { useState } from "react";
import LogoGym from "../../assets/FitnesLogo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./footBurger.scss";
export const footerBrgData = [
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
  {
    id: 7,
    title: "Абонемент по времени",
  },
  {
    id: 8,
    title: "Разовые тренировки",
  },
];

const FootBurger = () => {
  const [open, setOpen] = useState(false);

  function ClickBtn(event) {
    if (setOpen(event.target.className)) {
      setOpen(!open);
    }
  }
  return (
    <div className="main-wrapper">
      <div className={`wrapper-burger ${open ? "active" : ""}`}>
        <div className="top-buger">
          <img src={LogoGym} alt="" />
          <button className="click" onClick={() => setOpen(!open)}>
            {open ? (
              <CloseIcon style={{ fontSize: "30px" }} />
            ) : (
              <MenuIcon style={{ fontSize: "30px" }} />
            )}
          </button>
        </div>
        <div className="wrapper-titles">
          {footerBrgData.map((res) => (
            <div
              key={res.id}
              onClick={ClickBtn}
              activeclassname="active"
              className="burgerTitle"
              to={res.burgerTitle}
            >
              <p>{res.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FootBurger;
