import React, { useState, useEffect } from "react";
import axios from "axios";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const GalleryApi = () => {
  const [cloudImages, setCloudImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://res.cloudinary.com/cmmc/image/list/cocktail.json")
        .then((res) => {
          console.log(res.data.resources);
          setCloudImages(res.data.resources);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="galleryImgContainer">
      <CloudinaryContext cloudName="cmmc">
        {cloudImages
          ? cloudImages.map((data) => {
              return (
                <Image
                  className="galleryImages"
                  publicId={data.public_id}
                  key={data.public_id}
                >
                  {data.public_id ===
                  "sipnstir/pink_mint_lemon_cocktail_s9xjx8" ? (
                    <Transformation angle="18" background="grey" />
                  ) : null}
                </Image>
              );
            })
          : null}
      </CloudinaryContext>
    </div>
  );
};

export default GalleryApi;
