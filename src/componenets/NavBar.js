import React from "react";
import { ThemeButton, NavLinkStyled, logo } from "../styles";
import lightLogo from "../images/theWhite.gif";
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
