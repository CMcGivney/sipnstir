import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Image} from 'semantic-ui-react'
import DropDownMenu from './DropDownMenu.js'
import Logo from '../images/Sip&Stir_White.png'

const navStyles = {
  padding: '1rem',
  color: 'white',
}

class Navbar extends React.Component {
  state = {
    width: window.screen.width
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.screen.width });
  };
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
  
    if (isMobile)
    return (
      <DropDownMenu/>
    )
    else
    return (
      <>
         <Menu secondary compact inverted fixed='top'>
          <Link to='/'>
            <Menu.Item
              name='Home'
              id='home'
             >
              <Image
              size='tiny' 
              src={Logo} 
              alt="Sip & Stir Logo"
             />
            </Menu.Item>
          </Link>
            <Menu.Menu position="right" style={navStyles}>
             <Link to='/'>
              <Menu.Item
               name='Home'
               as='h4'
               id='home'
               active={this.props.location.pathname === '/'}
               />
             </Link>
            <Link to='/Contact'>
             <Menu.Item
              name='Quote'
              id='contact'
              as='h4'
              active={this.props.location.pathname === '/Contact'}
             />
            </Link>
            {/* <Link to='/Services'>
             <Menu.Item
              name='Services'
              id='Services'
              as='h4'
              active={this.props.location.pathname === '/Services'}
             />
            </Link> */}
            {/* <Link to='/Events'>
             <Menu.Item
              name='Events'
              id='Events'
              as='h4'
              active={this.props.location.pathname === '/Events'}
             />
            </Link> */}
            <Link to='/FAQ'>
             <Menu.Item
              name='FAQ'
              id='FAQ'
              as='h4'
              active={this.props.location.pathname === '/FAQ'}
              />
            </Link>
          </Menu.Menu>
         </Menu>
      
    </>
    )
  }
}

// const styles = {
//   active: {
//     color: 'white',
//     fontWeight: 'bold',
//     backgroundColor: '#555'
//   }
//}
export default withRouter(Navbar);