import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <Fragment>
    <NavLink to="/" name="Home" id="home">
      <img
        height="75"
        width="140"
        src="https://res.cloudinary.com/cmmc/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_996/v1600533758/sipnstir/Sip_Stir_Black_qqkxj9.png"
        alt="Sip & Stir Logo"
      />
    </NavLink>

    <div>
      <NavLink exact to="/" activeClassName="selected" name="Home" id="home">
        Home
      </NavLink>
      <NavLink exact to="/Contact" name="Quote" id="contact">
        Quote
      </NavLink>
      <NavLink exact to="/Services" name="Services" id="Services">
        Services
      </NavLink>
      {/* <NavLink exact to="/Gallery" name="Gallery" id="Gallery">
        Gallery
      </NavLink> */}
      {/* <NavLink exact to="/Partners" name="Partners" id="Partners">
            Partners
          </NavLink> */}
      <NavLink exact to="/FAQ" name="FAQ" id="FAQ">
        FAQs
      </NavLink>
    </div>
  </Fragment>
);
