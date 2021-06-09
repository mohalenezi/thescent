import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
}
P {
    font-style: italic;
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
