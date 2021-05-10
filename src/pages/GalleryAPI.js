import React, { useState, useEffect } from "react";
import axios from "axios";
import { CloudinaryContext, Image } from "cloudinary-react";

const GalleryApi = () => {
  const [cocktailImages, setCocktailImages] = useState([]);
  const [wineImages, setWineImages] = useState([]);
  const [foodImages, setFoodImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://res.cloudinary.com/cmmc/image/list/wine.json")
        .then((res) => {
          setWineImages(res.data.resources);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://res.cloudinary.com/cmmc/image/list/food.json")
        .then((res) => {
          setFoodImages(res.data.resources);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://res.cloudinary.com/cmmc/image/list/cocktail.json")
        .then((res) => {
          setCocktailImages(res.data.resources);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    fetchData();
  }, []);

  return (
    <section style={{marginTop: '7rem'}}>
      <CloudinaryContext cloudName="cmmc">
        <div className="galleryImgContainer">
          {cocktailImages
            ? cocktailImages.map((data) => {
                return (
                  <Image
                    className="galleryImages"
                    publicId={data.public_id}
                    key={data.public_id}
                    width="150"
                    height="150"
                  ></Image>
                );
              })
            : null}
        </div>
      </CloudinaryContext>
      <CloudinaryContext cloudName="cmmc">
        <div className="galleryImgContainer">
          {foodImages
            ? foodImages.map((data) => {
                return (
                  <Image
                    className="galleryImages"
                    publicId={data.public_id}
                    key={data.public_id}
                    width="150"
                    height="150"
                  ></Image>
                );
              })
            : null}
        </div>
      </CloudinaryContext>
      <CloudinaryContext cloudName="cmmc">
        <div className="galleryImgContainer">
          {wineImages
            ? wineImages.map((data) => {
                return (
                  <Image
                    className="galleryImages"
                    publicId={data.public_id}
                    key={data.public_id}
                    width="150"
                    height="150"
                  ></Image>
                );
              })
            : null}
        </div>
      </CloudinaryContext>
    </section>
  );
};

export default GalleryApi;
