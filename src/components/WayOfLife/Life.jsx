import React from "react";
import {
  MainWrapper,About,WrapperImg,GymImg1,GymImg2,
  Info,Title,Desc,WrapperBtn,TitleBtn,HoverSelection,
} from "./lifestyle";
import Hover from "../HoverSelectors/Hover"
const Life = () => {
  return (
    <MainWrapper>
      <About>
        <WrapperImg>
          <GymImg1 />
          <GymImg2 />
        </WrapperImg>
        <Info>
          <Title>Новый образ жизни</Title>
          <Desc>
            Став частью нашей команды, вы сможете изменить привычный ритм жизни
            и сделать каждый свой день особенным, а формат наших тренировок
            позволит вам раскрыть потенциал вашего тела на 100%.
          </Desc>
          <WrapperBtn>
            <TitleBtn>Получить консультацию</TitleBtn>
          </WrapperBtn>
        </Info>
      </About>
      <Hover/>
    </MainWrapper>
  );
};

export default Life;
