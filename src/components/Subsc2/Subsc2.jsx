import React from "react";
import Card from "./Cards/Card";
import "./subsc2.scss";

export const numbrTr2 = [
  {
    id: 1,
    title: "Тип карты",
  },
  {
    id: 2,
    title: "12 месяцев",
  },
  {
    id: 3,
    title: "6 месяцев",
  },
  {
    id: 4,
    title: "3 месяца",
  },
  {
    id: 5,
    title: "1 месяц",
  },
];

export const typeTrTime = [
  {
    id: 1,
    title: `Индивидуальная,
        полная без ограничения
        в посещении / 8:00 – 23:00`,
  },
  {
    id: 2,
    title: "18000 (+200 мин. солярия)",
  },
  {
    id: 3,
    title: "1200",
  },
  {
    id: 4,
    title: "7000",
  },
  {
    id: 5,
    title: "2500",
  },
];

export const typeTrTime2 = [
  {
    id: 1,
    title: `Индивидуальная,
        дневная / 8:00 – 17:00`,
  },
  {
    id: 2,
    title: "—",
  },
  {
    id: 3,
    title: "9500",
  },
  {
    id: 4,
    title: "5500",
  },
  {
    id: 5,
    title: "2000",
  },
];
const Subsc2 = () => {
  return (
    <div className="wrapper-subsTime">
      <div className="subs-divTime">
        <p className="titleTime">Абонемент по времени</p>
        <div className="wrapper-listTime">
          <div className="top-numbers2">
            {numbrTr2.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
          <div className="type2">
            {typeTrTime.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
          <div className="type2">
            {typeTrTime2.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Subsc2;
