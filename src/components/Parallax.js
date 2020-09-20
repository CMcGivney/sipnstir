import React from 'react'
import { Parallax,} from 'react-parallax';
import {Image,} from 'semantic-ui-react'

const insideStyles = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "15%",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  padding: '0rem 1rem'
};

const ParaImage = () => (
 
   <Parallax
     bgImage="https://res.cloudinary.com/cmmc/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_4509/v1600533723/sipnstir/cocktail_tz01ky.webp"
     bgImageAlt="A cocktail being poured over ice"
     strength={-300}
    >
     <div className="titleBox">
      <Image
        src= "https://res.cloudinary.com/cmmc/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_996/v1600533758/sipnstir/Sip_Stir_Black_qqkxj9.png"
        alt= "Sip And Stir"
        size= "big"
        style={insideStyles}
       />
     </div>
   </Parallax>
)
export default ParaImage