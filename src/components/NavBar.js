import React from "react";
import NavBarContent from "./NavBarContent.js";
import DropDownMenu from "./DropDownMenu.js";
import UseWindowSize from "../Hooks/useWindowSize.js";

const Navbar = () => {
  const size = UseWindowSize();
  return size.width <= 650 ? <DropDownMenu /> : <NavBarContent />;
};

export default Navbar;
