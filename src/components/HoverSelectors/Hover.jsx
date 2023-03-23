import React from "react";
import { Main, WrapperHover,Border, WrapperHv, ImgHv, Title } from "./hoverstyle";
import ImgHover1 from "../../assets/bike.png";
import ImgHover2 from "../../assets/dumbbell.png";
import ImgHover3 from "../../assets/location.png";
import ImgHover4 from "../../assets/wallet.png";
export const HoverData = [
  {
    id: 1,
    title: "Полностью укомплектованный зал",
    Img: ImgHover1,
  },
  {
    id: 2,
    title: "Профессиональное оборудование",
    Img: ImgHover2,
  },
  {
    id: 3,
    title: "Удобное расположение в центре города",
    Img: ImgHover3,
  },
  {
    id: 4,
    title: "Доступная стоимость занятий",
    Img: ImgHover4,
  },
];

const Hover = () => {
  return (
    <Main>
      <WrapperHover>
        {HoverData.map((res) => (
          <Border key={res.id}>
            <WrapperHv key={res.id}>
              <ImgHv src={res.Img} alt="#" />
              <Title>{res.title}</Title>
            </WrapperHv>
          </Border>
        ))}
      </WrapperHover>
    </Main>
  );
};

export default Hover;
