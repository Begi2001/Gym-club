import React from "react";
import Logo1 from "../../assets/FitnesLogo.png";
import { Li, Logo, PhoneNm, Ul, Wrapper } from "./nvstyle";
export { Wrapper, Ul, Li, Logo, PhoneNm } from "./nvstyle";
export const navData = [
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
];
const Navbar = () => {
  return (
    <Wrapper>
      <Logo src={Logo1} />
      <Ul>
        {navData.map((res) => (
          <Li key={res.id}>{res.title}</Li>
        ))}
      </Ul>
      <PhoneNm>+7 (496) 416-19-16</PhoneNm>
    </Wrapper>
  );
};

export default Navbar;
