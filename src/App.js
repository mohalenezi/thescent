import { ThemeProvider } from "styled-components";
import "./App.css";
import PerfumeList from "./componenets/PerfumeList";
import { GlobalStyle } from "./styles";
import { useState } from "react";
import PerfumeDetail from "./componenets/PerfumeDetail";
import ShopDetail from "./componenets/ShopDetail";
import Home from "./componenets/Home";
import ShopList from "./componenets/ShopList";

import { Route, Switch } from "react-router";
import NavBar from "./componenets/NavBar";

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
        <Switch>
          <Route path="/perfumes/:perfumeSlug">
            <PerfumeDetail />
          </Route>
          <Route path="/perfumes">
            <PerfumeList />
          </Route>
          <Route path="/shops/:shopSlug">
            <ShopDetail />
          </Route>
          <Route path="/shops">
            <ShopList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
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
