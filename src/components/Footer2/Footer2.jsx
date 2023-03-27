import React from "react";
import "./footer2.scss";
import ImgGym from "../../assets/FitnesLogo.png";
import InstaImg from "../../assets/instafooter.png";
import VKImg from "../../assets/vkfooter.png";
import FootBurger from "../footerBurger/FootBurger";
export const middleData1 = [
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
];

export const middleData2 = [
  {
    id: 1,
    title: "Тренеры",
  },
  {
    id: 2,
    title: "Контакты",
  },
];

export const middleData3 = [
  {
    id: 1,
    title: "Абонементы",
  },
  {
    id: 2,
    title: "Абонемент по времени",
  },
  {
    id: 3,
    title: "Разовые тренировки",
  },
];

export const rightData = [
  {
    id: 1,
    title: "г. Орехово-Зуево, ул. Ленина 84",
  },
  {
    id: 2,
    title: "Ежедневно с 8:00 до 23:00",
  },
  {
    id: 3,
    title: "+7 (496) 416-19-16, +7 (925) 881-21-70",
  },
  {
    id: 4,
    title: "Политика конфиденциальности",
  },
];

const Footer2 = () => {
  return (
    <div className="main-wrapepr">
      <FootBurger />
      <div className="wrapper">
        <div className="left">
          <img src={ImgGym} alt="" />
          <p>© Все права защищены</p>
          <p>Орехово-Зуево, 2013-2022</p>
        </div>
        <div className="middle">
          <div className="titles1">
            {middleData1.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
          <div className="titles1">
            {middleData2.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
          <div className="titles1">
            {middleData3.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="social-media">
            <p>Наши соц.сети</p>
            <div className="img-sm">
              <img src={InstaImg} alt="" />
              <img src={VKImg} alt="" />
            </div>
          </div>
          <div className="right-titles">
            {rightData.map((res) => (
              <p>{res.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
