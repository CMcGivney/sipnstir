import React from "react";
import { NavLink, withRouter} from "react-router-dom";

const NavBarContent = () => {
  const navStyles = {
    backgroundColor: "#4d574b",
    margin: "0 0 0 0",
    padding: '.5rem',
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  };
 
  const navItems = {
    color: "white",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "1rem 1rem",
  };
  return (
    <>
      <header style={navStyles}>
        <NavLink to="/" name="Home" id="home">
          <img
            height="45rem"
            width="45rem"
            src="https://res.cloudinary.com/cmmc/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_996/v1600533758/sipnstir/Sip_Stir_Black_qqkxj9.png"
            alt="Sip & Stir Logo"
          />
        </NavLink>

        <div style={navItems}>
          <NavLink style={navItems} exact to="/" activeClassName="selected" name="Home" id="home">
            Home
          </NavLink>
          <NavLink style={navItems} exact to="/Contact" name="Quote" id="contact">
            Quote
          </NavLink>
          <NavLink style={navItems} exact to="/Services" name="Services" id="Services">
            Services
          </NavLink>
          {/* <NavLink style={navItems} exact to="/Partners" name="Partners" id="Partners">
            Partners
          </NavLink> */}
          <NavLink style={navItems} exact to="/FAQ" name="FAQ" id="FAQ">
            FAQs
          </NavLink>
        </div>
      </header>
    </>
  );
};
export default withRouter(NavBarContent);
