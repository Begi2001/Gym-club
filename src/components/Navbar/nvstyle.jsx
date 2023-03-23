import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
`;
export const Ul = styled.ul`
  width: 580px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1025px) {
    width: 500px;
  }
  @media (max-width: 930px) {
    width: 450px;
  }
  @media (max-width: 870px) {
    display: none;
  }
`;
export const Li = styled.li`
  list-style: none;
  color: #fff;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #f7931e;
  }
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;
export const Logo = styled.img`
  @media (max-width: 870px) {
    display: none;
  }
`;
export const PhoneNm = styled.p`
  color: #fff;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 870px) {
    display: none;
  }
`;
