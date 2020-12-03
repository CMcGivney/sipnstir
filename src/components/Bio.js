import React from "react";
import {SimpleImg} from "react-simple-img"

const Bio = () => (
  <section className="bio">
   
    <SimpleImg
      src="https://res.cloudinary.com/cmmc/image/upload/dpr_auto,f_auto,q_auto/v1600536030/sipnstir/headShot_yoqfib.jpg"
      alt="Head shot of sean palmer the founder"
      className="img_HShot"
      height={250}
      width={300}
    />
    <div className="bio_description">
      <h3 className="cardHead" style={{ color: "white" }}>
            Meet The Founder
          </h3>
      <p className="cardMeta" style={{ color: "white" }}>
        Sean Palmer has worked in restaurants for most of his adult life.
        Starting in Maryland, busing tables to earn money in high school for
        snowboard trips, to Park City’s Farm Restaurant at Canyons Village to
        San Francisco’s famed fine dining restaurant,{" "}
        <a href="http://www.sprucesf.com/" alt="Link to Spruce SF restaurant">
          Spruce
        </a>
        , and back again to Utah. When returning to Park City in 2015 he was
        quickly hired to run the bar program at{" "}
        <a href="https://handleparkcity.com/">Handle</a> restaurant. Bringing
        extensive knowledge of wine and cocktails to this program proved to be
        successful, with the growth of Handle’s bar crowd and return clientele,
        that showed up to enjoy the new cocktails and wine year after year.{" "}
      </p>
      <p className="cardMeta" style={{ color: "white" }}>
        As a certified Sommelier, with many years on the dining room and winery
        floor, Sean loves to pair guests with the perfect bottle of wine or
        lively libation. As the bar & wine manager at{" "}
        <a href="https://handleparkcity.com/">Handle</a> restaurant, he was
        passionate about curating a wine and cocktail list that respected the
        classics while expanding flavor profiles for the patrons. Let him put a
        custom bar package together for your next event.
      </p>
    </div>
  </section>
);
export default Bio;
