import React, { useRef } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useDetectOutsideClick } from "../Hooks/useDetectOutsideClick.js";

const DropDownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <NavLink to="/" alt="Link to Home Page">
        <img
          height="60"
          width="90"
          src="https://res.cloudinary.com/cmmc/image/upload/c_scale,dpr_auto,f_auto,w_240/v1600533769/sipnstir/Sip_Stir_White_odhixa.png"
          style={{ padding: "0", margin: ".5em" }}
          alt="Sip And Stir Logo"
        />
      </NavLink>
      <div className="menu-container">
        <button onClick={onClick} className="dropdown_menu-trigger">
          <img
            src="//s.svgbox.net/hero-solid.svg?fill=805ad5&ic=menu"
            alt="menu bars"
            height="25"
            width="25"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`dropdown_menu ${isActive ? "active" : "inactive"}`}
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
              <a href="/Gallery">Gallery</a>
            </li> */}
            {/* <li>
              <a href="/Partners">Partners</a>
            </li> */}
            <li>
              <a href="/FAQ">FAQs</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default withRouter(DropDownMenu);
