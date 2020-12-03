import React from "react";
import NavBarContent from "./NavbarComponent.js";
import DropDownMenu from "./DropdownNavbar.js";
import UseWindowSize from "../Hooks/useWindowSize.js";
// import { useScrollPosition } from "../Hooks/useScrollPosition.js";

const Navbar = () => {
  // const [hideOnScroll, setHideOnScroll] = useState(true)

  // useScrollPosition(({ prevPos, currPos }) => {
  //   const isShow = currPos.y > prevPos.y
  //   if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  // }, [hideOnScroll])

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
