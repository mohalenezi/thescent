import { ThemeProvider } from "styled-components";
import "./App.css";
import PerfumeList from "./componenets/PerfumeList";
import {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  ThemeButton,
} from "./styles";

import { useState } from "react";
import PerfumeDetail from "./componenets/PerfumeDetail";
import perfumes from "./products";

const theme = {
  light: {
    mainColor: "grey",
    backgroundColor: "lightyellow",
  },
  dark: {
    mainColor: "lightyellow",
    backgroundColor: "grey",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [perfume, setPerfume] = useState(null);

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };
  const setView = () => {
    return perfume ? (
      <PerfumeDetail perfume={perfume} />
    ) : (
      <PerfumeList setPerfume={setPerfume} />
    );
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <div>
          <ThemeButton onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} mode
          </ThemeButton>
          <Title>
            <p>The Art that makes memory speaks</p>
          </Title>
          <Description>
            The best compliment for a good look is a great "SCENT"
          </Description>
          <ShopImage
            alt="shop"
            src="https://media.istockphoto.com/photos/spraying-perfume-on-dark-background-closeup-image-picture-id1155893537?k=6&m=1155893537&s=170667a&w=0&h=6rID0_7RWQbsEwWvQlMkQinwL0ev0afQfdK1AfNqun0="
          />
        </div>
        {setView()}
      </ThemeProvider>
    </div>
  );
}

export default App;
