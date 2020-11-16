import React from 'react'
import { Parallax,} from 'react-parallax';
import {Image,} from 'semantic-ui-react'
import UseWindowSize from '../Hooks/useWindowSize.js'
import Cocktail from "../Images/cocktail.JPG"
import Logo from "../Images/Sip&Stir_noBackground.png"

const insideStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "15%",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  padding: '0rem 1rem'
};

 const ParaImage = () => {
  const size = UseWindowSize();

  const mobileSize = (size.height <= 414) ? "medium" : "big"
  
  return (
   
   <Parallax
     bgImage={Cocktail}
     bgImageAlt="A cocktail and fruit with bar tools"
     strength={-200}
    >
     <div className="titleBox">
      <Image
        src= {Logo}
        alt= "Sip And Stir"
        size= {mobileSize}
        style={insideStyles}
       />
     </div>
   
   </Parallax>
)
  }
export default ParaImage