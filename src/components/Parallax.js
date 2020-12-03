import React from "react";
import { Parallax } from "react-parallax";
import UseWindowSize from "../Hooks/useWindowSize.js";
import Cocktail from "../Images/cocktail.JPG";
import Logo from "../Images/Sip&Stir_noBackground.png";

const insideStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "15%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0rem 1rem",
};

const ParaImage = () => {
  const size = UseWindowSize();

  const setHeight = size.width <= 414 ? 209 : 380;
  const setWidth = size.width <= 414 ? 345.05 : 604.48;
    
  return (
    <Parallax
      bgImage={Cocktail}
      bgImageAlt="A cocktail and fruit with bartending tools"
      strength={-200}
    >
      <div className="titleBox">
        <img
          src={Logo}
          alt="Sip And Stir"
          height={setHeight}
          width={setWidth}
          style={insideStyles}
        />
      </div>
    </Parallax>
  );
};
export default ParaImage;
