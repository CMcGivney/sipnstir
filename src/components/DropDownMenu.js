import React from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import { Menu, Dropdown, Image, Container } from "semantic-ui-react";

const DropDownMenu = () => {
  const location = useLocation();

  return (
    <>
      <Menu
        compact
        size="large"
        fluid
        style={{
          backgroundColor: "#4d574b",
          
        }}
      >
        <Container>
          <Link to="/" alt="Link to Home Page">
            <Menu.Item style={{ padding: ".5rem" }}>
              <Image
                size="tiny"
                src="https://res.cloudinary.com/cmmc/image/upload/c_scale,dpr_auto,f_auto,w_240/v1600533769/sipnstir/Sip_Stir_White_odhixa.png"
                style={{ padding: "0", margin: ".5em" }}
                alt="Sip And Stir Logo"
              />
            </Menu.Item>
          </Link>
          <Dropdown
            pointing="right"
            icon="bars"
            item
            style={{ margin: "0", padding: "1rem", color: "white" }}
            scrolling
            button
            className="menuBars"
          >
            <Dropdown.Menu>
              <Link to="/">
                <Dropdown.Item
                  name="Home"
                  as="h4"
                  id="home"
                  active={location.pathname === "/"}
                >
                  Home
                </Dropdown.Item>
              </Link>
              <Link to='/Services'>
                <Dropdown.Item 
                name='Services'
                id='Services'
                as='h4'
                active={location.pathname === '/Services'}>Services
              </Dropdown.Item>
              </Link>
              <Link to="/Contact">
                <Dropdown.Item
                  name="Quote"
                  id="contact"
                  active={location.pathname === "/Contact"}
                >
                  Quote
                </Dropdown.Item>
              </Link>
              <Link to='/Partners'>
              <Dropdown.Item 
                 name='Partners'
                id='Partners'
                active={location.pathname === '/Partners'}>Events
              </Dropdown.Item>
              </Link>
              <Link to="/FAQ">
                <Dropdown.Item
                  name="FAQ"
                  id="FAQ"
                  active={location.pathname === "/FAQ"}
                  //  icon="question circle"
                >
                  FAQ
                </Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </>
  );
};

export default withRouter(DropDownMenu);
