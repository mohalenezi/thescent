import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyle } from "./styles";
// libraries //
import { useState } from "react";

import NavBar from "./componenets/NavBar";
import Routes from "./componenets/Routes";

import { observer } from "mobx-react";

//== stores ==//
import shopStore from "./stores/shopStore";
import perfumeStore from "./stores/perfumeStore";

const theme = {
  light: {
    mainColor: "black",
    backgroundColor: "#6d8ead",
    red: "red",
  },
  dark: {
    mainColor: "white",
    backgroundColor: "grey",
    red: "red",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        {shopStore.loading || perfumeStore.loading ? (
          <h1>loading...</h1>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </div>
  );
}

export default observer(App);
{
  /* <NavLinkStyled to="/perfumes">Perfumes</NavLinkStyled>
          <ThemeButton onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} mode
          </ThemeButton> */
}

{
  /* <Title>
            <p>The Art that makes memory speaks</p>
          </Title>
          <Description>
            The best compliment for a good look is a great "SCENT"
          </Description>
          <ShopImage
            alt="shop"
            src="https://media.istockphoto.com/photos/spraying-perfume-on-dark-background-closeup-image-picture-id1155893537?k=6&m=1155893537&s=170667a&w=0&h=6rID0_7RWQbsEwWvQlMkQinwL0ev0afQfdK1AfNqun0="
          />
       
        {setView()} */
}
