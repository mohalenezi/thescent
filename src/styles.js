import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
}
P {
    font-style: italic;
}
`;

export const Navstyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const AiFillPlusCircleStyled = styled(AiFillPlusCircle)`
  color: ${(props) => props.theme.mainColor};
  margin-left: 70%;
`;

export const logo = styled(Link)`
  padding: 10em;

  img {
    width: 50%;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  box-sizing: content-box;
  width: 50%;
  display: block;
  align-text: center;
  margin-left: 50%;
  font-size: 30px;

  &.active {
    color: ${(props) => props.theme.red};
  }
`;

export const Title = styled.h1`
  text-align: center;
  p {
    background-color: #282c34;
    min-height: 10vh;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 6vmin);
    color: white;
  }
`;

export const Description = styled.h3`
  text-align: center;
  font-size: 40px;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const LogoImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

export const ListWrapper = styled.div`
  box-sizing: content-box;
  width: 100%;

  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PerfumeWrapper = styled.div`
  margin: 4vw;
  box-sizing: content-box;
  width: 100%;

  img {
    width: 300px;
    height: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    text-align: center;
  }
  p:last-child {
    text-align: center;
    color: red;
  }
  Button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    button-size: 10%;
  }
`;
export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  display: block;
  margin: 1rem auto;
  width: 40%;
  align-self: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
    margin-right: 20px;
  }

  p {
    vertical-align: middle;
    font-size: 30px;
  }
`;
export const DeletButtonStyled = styled.button`
  color: ${(props) => props.theme.red};
`;

export const CreateButtonStyled = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
