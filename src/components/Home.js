import React from "react";
import Motto from "./Motto.js";
import Bio from "./Bio.js";
import About from "./About.js";
// import Twitter from "./Twitter.js";
import ParaImage from "./Parallax.js";
import { Helmet } from "react-helmet";

const Home = () => (
  <>
    <Helmet
      title="Sip & Stir Bar Services"
      meta={[
        {
          name: "description",
          content:
            "Sip & Stir is a bartending service based in Park City. Our bartenders service weddings and other events throughout Utah. Call for your quote today!",
        },
        { property: "og:url", content: "https://sipandstirpc.com/" },
      ]}
    />

    <ParaImage />

    <div className="homeContentGrid ">
      <About />
      <Motto />
      <Bio />
      {/* <Twitter /> */}
    </div>
  </>
);

export default Home;
