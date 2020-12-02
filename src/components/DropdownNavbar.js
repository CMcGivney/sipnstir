import React, { useRef } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useDetectOutsideClick } from "../Hooks/useDetectOutsideClick.js";

const DropDownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <header style={navStyles}>
      <NavLink to="/" alt="Link to Home Page">
        <img
          height="40em"
          width="40em"
          src="https://res.cloudinary.com/cmmc/image/upload/c_scale,dpr_auto,f_auto,w_240/v1600533769/sipnstir/Sip_Stir_White_odhixa.png"
          style={{ padding: "0", margin: ".5em" }}
          alt="Sip And Stir Logo"
        />
      </NavLink>
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <img
            src="//s.svgbox.net/hero-solid.svg?fill=805ad5&ic=menu"
            alt="menu bars"
            height="25rem"
            width="25rem"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            {/* <li>
              <a href="/Partners">Partners</a>
            </li> */}
            <li>
              <a href="/FAQ">FAQs</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
const navStyles = {
  backgroundColor: "#4d574b",
  margin: "auto",
  padding: ".5rem",
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "space-between",
};


export default withRouter(DropDownMenu);