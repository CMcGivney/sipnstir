import React from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";

const NavBarContent = () => {
  const location = useLocation();
  const navStyles = {
    padding: "1rem",
    color: 'black'
    
  };
  return (
    <>
      <Menu secondary fixed="top" inverted style={{backgroundColor: "#4d574b", margin: "0 0 0 0"}}>
        <Link to="/">
          <Menu.Item name="Home" id="home">
            <Image
              size="tiny"
              src="https://res.cloudinary.com/cmmc/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_996/v1600533758/sipnstir/Sip_Stir_Black_qqkxj9.png"
              alt="Sip & Stir Logo"
            />
          </Menu.Item>
        </Link>
        <Menu.Menu position="right" style={navStyles}>
          <Link to="/">
            <Menu.Item
              name="Home"
              as="h4"
              id="home"
              active={location.pathname === "/"}
            />
          </Link>
          <Link to="/Contact">
            <Menu.Item
              name="Quote"
              id="contact"
              as="h4"
              active={location.pathname === "/Contact"}
            />
          </Link>
          {/* <Link to='/Services'>
      <Menu.Item
       name='Services'
       id='Services'
       as='h4'
       active={location.pathname === '/Services'}
      />
     </Link> */}
          {/* <Link to='/Events'>
      <Menu.Item
       name='Events'
       id='Events'
       as='h4'
       active={location.pathname === '/Events'}
      />
     </Link> */}
          <Link to="/FAQ">
            <Menu.Item
              name="FAQ"
              id="FAQ"
              as="h4"
              active={location.pathname === "/FAQ"}
            />
          </Link>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default withRouter(NavBarContent);
