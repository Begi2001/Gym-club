import styled from "styled-components";
import GymIm1 from "../../assets/life1.png";
import GymIm2 from "../../assets/life2.png";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  height: 100%;
  background: #0c1417;
  padding: 77px 5px 77px 5px;
`;
export const About = styled.div`
  margin: 0 auto;
  max-width: 1172px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1140px) {
    width: 670px;
    text-align: center;
    flex-direction: column-reverse;
    justify-content: center;
    align-content: center;
    gap: 50px;
  }
`;
export const WrapperImg = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 1140px) {
    justify-content: space-around;
    gap: 0px;
  }
`;
export const GymImg1 = styled.div`
  background-image: url(${(p) => (p.bg, GymIm1)});
  width: 308px;
  height: 432px;
  background-position: center;
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.5));
`;
export const GymImg2 = styled.div`
  background-image: url(${(p) => (p.bg, GymIm2)});
  width: 308px;
  height: 432px;
  background-position: center;
  margin-top: 40px;
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.5));
  @media (max-width: 1140px) {
    margin-top: 0px;
  }
`;
export const Info = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  @media (max-width: 1140px) {
    width: 100%;
    align-items: center;
  }
`;
export const Title = styled.h2`
  color: #fff;
  font-size: 30px;
`;
export const Desc = styled.h4`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;
export const WrapperBtn = styled.div`
  clip-path: polygon(21.5% 0%, 96.5% 0%, 90% 100%, 15% 100%);
  width: 300px;
  height: 50px;
  margin-left: -40px;
  background: #f99e36d9;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  &:hover {
    background: #f7931e !important;
    transition: 0.5s ease-in-out;
  }
`;
export const TitleBtn = styled.h3`
  font-size: 16px;
  text-align: center;
  margin-left: 30px;
  color: #fff;
`;
