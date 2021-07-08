import React from "react";
//style
import {
  ThemeButton,
  NavLinkStyled,
  Logo,
  LogoImage,
  NavStyled,
} from "../styles";

//themes logo
import lightLogo from "../images/wTheme.png";
import darkLogo from "../images/bTheme.png";

function NavBar(props) {
  return (
    //   <div>
    // <logo to="/">
    //   <LogoImage
    //     src={props.currentTheme === "light" ? lightLogo : darkLogo}
    //   />
    // </logo>
    //     <NavLinkStyled to="/perfumes">Perfumes</NavLinkStyled>
    //     <ThemeButton onClick={props.toggleTheme}>
    //       {props.currentTheme === "light" ? "Dark" : "Light"} mode
    //     </ThemeButton>
    //   </div>
    // );
    <NavStyled className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Logo to="/" className="navbar-brand">
            <LogoImage
              src={props.currentTheme === "light" ? lightLogo : darkLogo}
              width="100"
            />
          </Logo>
          <ul className="navbar-nav ml-0">
            <ThemeButton
              onClick={props.toggleTheme}
              className="btn btn-secondary btn-lg"
            >
              {props.currentTheme === "light" ? "Dark" : "Light"} mode
            </ThemeButton>
            <NavLinkStyled to="/perfumes" className="nav-item">
              Perfumes
            </NavLinkStyled>
            <NavLinkStyled to="/shops" className="nav-item">
              Shops
            </NavLinkStyled>
          </ul>
        </div>
      </div>
    </NavStyled>
  );
}

export default NavBar;
