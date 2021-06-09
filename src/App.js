import { ThemeProvider } from "styled-components";
import "./App.css";
import PerfumeList from "./componenets/PerfumeList";
import { GlobalStyle, Title, Description, ShopImage } from "./styles";

const theme = {
  mainColor: "grey",
  backgroundColor: "lightyellow",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
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
        <PerfumeList />
      </ThemeProvider>
    </div>
  );
}

export default App;
