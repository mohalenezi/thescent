import React from "react";
//style
import { ThemeButton, NavLinkStyled, logo } from "../styles";

//themes logo
import lightLogo from "../images/untitled.svg";
import darkLogo from "../images/theblk.gif";

function NavBar(props) {
  return (
    <div>
      <logo to="/">
        <img
          src={props.currentTheme === "light" ? lightLogo : darkLogo}
          width="500"
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
