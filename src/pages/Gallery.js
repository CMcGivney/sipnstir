import React, { useContext } from "react";
import NavBar from "../components/NavBar.js";
import { SimpleImg } from "react-simple-img"; 

import { ImageContext, ImageProvider } from "../Context/ImagesContext";

const GalleryComponent = () => {
  const { cocktailArray, foodArray, wineArray } = useContext(ImageContext);

  return (
    <>
      <NavBar />

      <h2 style={{textAlign:"center"}}>Cocktail Gallery</h2>
      <div className="galleryImgContainer">
        {cocktailArray.map((img, index) => (
          <div  key={index}>
            <SimpleImg
              className="galleryImages"
              src={img.image}
              alt={img.imageAlt}
              width="150px"
              height="150px"
            />
          </div>
        ))}
        </div>
        <h2 style={{textAlign:"center"}}>Catering Partners</h2>
        <div className="galleryImgContainer">
        {foodArray.map((img, index) => (
          <div  key={index}>
            <img
              className="galleryImages"
              src={img.image}
              alt={img.imageAlt}
              width="150px"
              height="150px"
            />
          </div>
        ))}
        </div>
        <h2 style={{textAlign:"center"}}>Wine Gallery</h2>
        <div className="galleryImgContainer">
        {wineArray.map((img, index) => (
          <div  key={index}>
            <img
              className="galleryImages"
              src={img.image}
              alt={img.imageAlt}
              width="150px"
              height="150px"
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Gallery = () => (
  <ImageProvider>
    <GalleryComponent></GalleryComponent>
  </ImageProvider>
);
export default Gallery;
