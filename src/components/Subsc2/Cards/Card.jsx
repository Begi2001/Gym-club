import React from "react";
import "./card.scss";
import TimeImg from "../../../assets/time.png";

export const Card1 = [
  {
    id: 1,
    title: "Самостоятельные тренировки в тренажерном зале",
    time: "8:00 – 23:00",
    price: "250₽",
    img: TimeImg,
  },
  {
    id: 2,
    title: "Персональный тренинг с инструктором",
    time: "8:00 – 23:00",
    price: "700₽",
    img: TimeImg,
  },
  {
    id: 3,
    title: "Зал групповых программ",
    time: "график занятий уточняйте у администратора",
    price: "300₽",
    img: TimeImg,
  },
];

const Card = () => {
  return (
    <div className="wrapper-card">
      {Card1.map((res) => (
        <div key={res} className="card">
          <p>{res.title}</p>
          <p>{res.time}</p>
          <img src={res.img} alt="" />
          <p>{res.price}</p>
          <p>1 тренировка</p>
          <div className="radius-div">
            <p className="title-find">Узнать</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
