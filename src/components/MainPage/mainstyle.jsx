import styled from "styled-components";
import BgImg from "../../assets/BgWrapper.png";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export const BgWrapper = styled.div`
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const AllDivs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const Desc1 = styled.h2`
  font-family: "Asap", sans-serif;
  font-weight: 800;
  font-size: 64px;
  color: #fff;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 45px;
  }
`;
export const Desc2 = styled.h2`
  font-family: "Asap", sans-serif;
  font-weight: 500;
  font-size: 28px;
  color: #fff;
  @media (max-width: 450px) {
    font-size: 25px;
  }
`;
export const ClickBtn = styled.div`
  position: relative;
  clip-path: polygon(21.5% 0%, 96.5% 0%, 90% 100%, 15% 100%);
  width: 300px;
  height: 50px;
  background: #f7931e;
  cursor: pointer;
  border: none;
`;
export const DescBtn = styled.p`
  position: absolute;
  top: 15px;
  left: 70px;
  right: 0;
  font-family: "Asap", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  max-width: max-content;
`;
export const ArrowDown1 = styled(ExpandMore)`
  color: #ffffff;
  cursor: pointer;
  font-size: 45px !important;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 25px;
  animation: scroll infinite 3.32s;
  @keyframes scroll {
    0% {
      opacity: 0;
      transform: rotate(0deg) translate(0px, 0px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(0deg) translate(0px, 0px);
    }
  }
`;
export const ArrowDown2 = styled(ExpandMore)`
  color: #f7931e;
  font-size: 45px !important;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 35px;
  animation: scroll infinite 3.3s;
  @keyframes scroll {
    0% {
      opacity: 0;
      transform: rotate(0deg) translate(0px, 0px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(0deg) translate(0px, 0px);
    }
  }
`;

export const InstaIconWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 20px;
  bottom: 0;
  margin-bottom: 25px;
`;
export const InstaIcon = styled(InstagramIcon)`
  cursor: pointer;
  font-size: 30px !important;
  color: #fff;
  transition: 0.5s ease-in-out !important;
  &:hover {
    color: #fba13b;
    transition: 0.5s ease-in-out;
    transform: scale(1.2);
  }
`;
export const TlgIcon = styled(TelegramIcon)`
  cursor: pointer;
  font-size: 30px !important;
  color: #fff;
  transition: 0.5s ease-in-out !important;
  &:hover {
    color: #fba13b;
    transition: 0.5s ease-in-out;
    transform: scale(1.2);
  }
`;
