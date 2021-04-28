import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  font-size: 1.2rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 20%;
    padding: 0;
  }
  @media screen and (max-width: 900px) {
    width: 10%;
  }
`;
export const LogoName = styled(Link)`
  font-family: 'Lobster';
  font-size: 2.5rem;
  width: 30%;
  text-align: center;
  margin-left: 0.5rem;
  @media screen and (max-width: 800px) {
    display: none;
}
`;

export const OptionsContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
      width: 80%;
  }
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;