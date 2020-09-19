import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Dropdown, Image, Container} from 'semantic-ui-react'


class DropDownMenu extends React.Component {

  
  render() {
  
    return (
      <>
      <Menu 
        compact 
        size="large" 
        pointing 
        fluid
        fixed="top"
        style={{backgroundColor: "black", boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)"}}>
        <Container className="dropDown" >
           <Link to="/" alt="Link to Home Page">
           <Menu.Item 
            style={{padding: ".5rem" }} 
            >
            <Image 
              size='tiny' 
              src="https://res.cloudinary.com/cmmc/image/upload/dpr_auto,f_auto,q_auto/v1600533769/sipnstir/Sip_Stir_White_odhixa.webp" 
              style={{ padding: '0', margin: ".5em" }} 
              alt="Sip And Stir Logo"
              />
             </Menu.Item>
             </Link>
              <Dropdown 
                pointing="right"
                icon="bars" 
                item
                style={{ margin: '0', padding: "1rem", color: "white" }} 
                scrolling
                button
                className="menuBars"
                >
                <Dropdown.Menu>
                  <Link to='/'>
                   <Dropdown.Item 
                      name='Home'
                      as='h4'
                      id='home'
                      active={this.props.location.pathname === '/'}>Home
                 </Dropdown.Item>
                 </Link>
               {/* <Link to='/Services'>
                <Dropdown.Item 
                name='Services'
                id='Services'
                as='h4'
                active={this.props.location.pathname === '/Services'}>Services
              </Dropdown.Item>
              </Link> */}
              <Link to='/Contact'>
              <Dropdown.Item 
                 name='Quote'
                id='contact'
                active={this.props.location.pathname === '/Contact'}>Quote
              </Dropdown.Item>
              </Link>
              {/* <Link to='/Events'>
              <Dropdown.Item 
                 name='Events'
                id='Events'
                active={this.props.location.pathname === '/Events'}>Events
              </Dropdown.Item>
              </Link> */}
              <Link to='/FAQ'>
              <Dropdown.Item 
                   name='FAQ'
                   id='FAQ'
                   active={this.props.location.pathname === '/FAQ'}
                  //  icon="question circle"
                  >FAQ
            </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
         </Dropdown>
       </Container>
      </Menu>
    </>
    )
  }
}


export default withRouter(DropDownMenu);