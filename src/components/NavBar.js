import React from 'react'
import NavBarContent from "./NavBarContent.js"
import DropDownMenu from './DropDownMenu.js'
import UseWindowSize from '../Hooks/useWindowSize.js'

const Navbar = () => {
  const size = UseWindowSize();


const isMobile = () => {
     if (size.width <= 650) {
    return <DropDownMenu/>
     }
    else {
    return <NavBarContent /> 
    }
  }
  return(
    isMobile()
  )
}


export default Navbar;