import React from "react";
import Motto from "../components/Motto.js";
import Bio from "../components/Bio.js";
import About from "../components/About.js";
import Nav from "../components/NavBar.js";
// import Twitter from "./Twitter.js";
import ParaImage from "../components/Parallax.js";
import { Helmet } from "react-helmet";
import {useScrollHandler} from "../Hooks/useScrollHandler.js"


const Home = () => {
const scroll = useScrollHandler()
const bar = scroll !== false ? <Nav/> : null;
  
  return (
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
     {bar}
      <ParaImage />

      <div className="homeContentGrid ">
        <About />
        <Motto />
        <Bio />
        {/* <Twitter /> */}
      </div>
    
    </>
    )
}

export default Home;
