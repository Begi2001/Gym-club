import React from "react";
import "./subs.scss";
export const numberTr = [
  {
    id: 1,
    title: "Кол-во занятий",
  },
  {
    id: 2,
    title: " 1 тренировка",
  },
  {
    id: 3,
    title: " 4 тренировки",
  },
  {
    id: 4,
    title: "8 тренировок",
  },
  {
    id: 5,
    title: "12 тренировок",
  },
];

export const typeTr = [
  {
    id: 1,
    title: "Персональный тренинг с инструктором",
  },
  {
    id: 2,
    title: "700 руб.",
  },
  {
    id: 3,
    title: "2600 руб. (действителен в течении 3 недель)",
  },
  {
    id: 4,
    title: "5200 руб. (действителен в течении 6 недель)",
  },
  {
    id: 5,
    title: "7200 руб. (действителен в течении 10 недель)",
  },
];

export const typeTr2 = [
  {
    id: 1,
    title: "Самостоятельные тренировки в тренажерном зале",
  },
  {
    id: 2,
    title: "250 руб.",
  },
  {
    id: 3,
    title: "—",
  },
  {
    id: 4,
    title: "1500 руб.(действителен в течении 30 дней)",
  },
  {
    id: 5,
    title: "2000 руб.(действителен в течении 30 дней)",
  },
];

export const typeTr3 = [
  {
    id: 1,
    title: "Зал групповых программ",
  },
  {
    id: 2,
    title: "300 руб.",
  },
  {
    id: 3,
    title: "—",
  },
  {
    id: 4,
    title: "2000 руб.(действителен в течении 30 дней)",
  },
  {
    id: 5,
    title: "2750 руб.(действителен в течении 45 дней)",
  },
];
const Subsc = () => {
  return (
    <div className="wrapper-subs">
      <div className="subs-div">
        <p className="title1">Абонементы</p>
        <div className="wrapper-list">
          <div className="top-numbers">
            {numberTr.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
          <div className="type1">
            {typeTr.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
          <div className="type1">
            {typeTr2.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
          <div className="type1">
            {typeTr3.map((res) => (
              <p key={res.id}>{res.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsc;
