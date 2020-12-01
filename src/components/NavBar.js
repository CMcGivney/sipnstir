import React, { useState } from "react";
import NavBarContent from "./NavBarContent.js";
import DropDownMenu from "./DropDownMenu.js";
import UseWindowSize from "../Hooks/useWindowSize.js";
import { useScrollHandler } from "../Hooks/useScrollHandler.js";
import { useScrollPosition } from "../Hooks/useScrollPosition.js";

const Navbar = () => {


  const size = UseWindowSize();
  const NavbarComponent =
    size.width <= 650 ? (
      <DropDownMenu />
    ) : (
      <NavBarContent />
    );

  return NavbarComponent;
};

export default Navbar;
