import React, { useContext } from "react";
import { SimpleImg } from "react-simple-img";

import { ImageContext, ImageProvider } from "../Context/ImagesContext";

const GalleryComponent = () => {
  const { cocktailArray, foodArray, wineArray } = useContext(ImageContext);

  return (
    <>
      
      <div className="galleryImgContainer">
        {cocktailArray.map((img, index) => (
          <div key={index}>
            <SimpleImg
              className="galleryImages"
              src={img.image}
              alt={img.imageAlt}
              width="150px"
              height="150px"
            />
          </div>
        ))}
        {wineArray.map((img, index) => (
          <div key={index}>
            <SimpleImg
              className="galleryImages"
              src={img.image}
              alt={img.imageAlt}
              width="150px"
              height="150px"
            />
          </div>
        ))}
        {foodArray.map((img, index) => (
          <div key={index}>
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
    </>
  );
};

const Gallery = () => (
  <ImageProvider>
    <GalleryComponent></GalleryComponent>
  </ImageProvider>
);
export default Gallery;
