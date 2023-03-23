import React from "react";
import Navbar from "../Navbar/Navbar";
import Burger from "../NavBurger/Burger";
import {
  BgWrapper,AllDivs,CenterDiv,
  Desc1,Desc2,ClickBtn,DescBtn,ArrowDown1,
  ArrowDown2,InstaIconWrapper,InstaIcon,TlgIcon,
} from "./mainstyle";

const MainPage = () => {
  return (
    <BgWrapper>
      <Burger />
      <Navbar />
      <AllDivs>
        <CenterDiv>
          <Desc1>Фитнес клуб Пантеон</Desc1>
          <Desc2>Лучше нас только боги</Desc2>
          <ClickBtn>
            <DescBtn>Получить консультацию</DescBtn>
          </ClickBtn>
        </CenterDiv>
      </AllDivs>
      <ArrowDown1 />
      <ArrowDown2 />
      <InstaIconWrapper>
        <InstaIcon />
        <TlgIcon />
      </InstaIconWrapper>
    </BgWrapper>
  );
};

export default MainPage;
