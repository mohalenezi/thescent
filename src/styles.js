import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

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

export const logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin: 10px;

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

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PerfumeWrapper = styled.div`
  margin: 10px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
  }
  p:last-child {
    text-align: center;
    color: red;
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
