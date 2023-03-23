import React from "react";
import "./footer.scss";
import Logo1 from "../../assets/FitnesLogo.png";

export const FooterData = [
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
export const FooterData2 = [
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
    title: "Абонемент по времени",
  },
  {
    id: 7,
    title: "Разовые тренировки",
  },
];
export const FooterData3 = [
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
const Footer = () => {
  return (
    <div className="MainWrapepr">
      <div className="left">
        <img src={Logo1} />
        <p>© Все права защищены</p>
        <p>Орехово-Зуево, 2013-2022</p>
      </div>
      <div className="center">
        <div className="left-title">
          {FooterData.map((res) => (
            <p key={res.id}>{res.title}</p>
          ))}
        </div>
        <div className="right-title">
          {FooterData2.map((res) => (
            <p key={res.id}>{res.title}</p>
          ))}
        </div>
      </div>
      <div className="right">
        {FooterData3.map((res) => (
          <p key={res.id}>{res.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
