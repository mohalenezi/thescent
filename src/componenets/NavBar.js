import React from "react";
//style
import { ThemeButton, NavLinkStyled, logo, LogoImage } from "../styles";

//themes logo
import lightLogo from "../images/wTheme.png";
import darkLogo from "../images/bTheme.png";

function NavBar(props) {
  return (
    <div>
      <logo to="/">
        <LogoImage
          src={props.currentTheme === "light" ? lightLogo : darkLogo}
        />
      </logo>
      <NavLinkStyled to="/perfumes">Perfumes</NavLinkStyled>
      <ThemeButton onClick={props.toggleTheme}>
        {props.currentTheme === "light" ? "Dark" : "Light"} mode
      </ThemeButton>
    </div>
  );
}

export default NavBar;
