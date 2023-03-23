import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  max-width: 1300px;
`;
export const WrapperHover = styled.div`
  width: 100%;
  display: flex;
  grid-gap: 25px;
  justify-content: space-between;
  @media (max-width: 1140px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 130px;
    grid-row-gap: 40px;
  }
`;
export const Border = styled.div`
  transition: 0.5s ease-in-out;
  border-radius: 2px;
  border-bottom: 2px solid #0c1417;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #f7931e;
    transition: 0.5s ease-in-out;
  }
`;
export const WrapperHv = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 1140px) {
    flex-direction: column;
    width: 210px;
    text-align: center;
    gap: 10px;
  }
  @media (max-width: 675px) {
  }
`;
export const ImgHv = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
`;
export const Title = styled.h3`
  font-size: 18px;
  color: #fff;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 10px;
`;
