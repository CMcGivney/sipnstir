import React from "react";
import { Header } from "semantic-ui-react";
import NavBar from "../components/NavBar.js";

const Services = () => (
  <>
    <NavBar />
    <div className="services">
      <div className="SrvHeader">
        <h1>Services We Provide</h1>
      </div>
    </div>
    <div className="srvContent">
      <div className="srvColumn">
        <Header as="h3">Event Bartending</Header>
        <p>
          Not getting the reservation time you want? Don’t want to pay for
          parking? Do the Utah DUI laws have you worried about drinking at
          dinner? Let Sip and Stir bring the party to your house and then pack
          it all up so you can enjoy the main street experience from the comfort
          of your own home.{" "}
        </p>
      </div>
      <div className="srvColumn">
        <Header as="h3">Wine Cellar Management</Header>
        <p>
          Are you new to Utah and having a hard time finding the wines you like
          or having a hard time navigating the DABC system in general? Sip and
          Stir can help you source the wine you want for your cellar or event.{" "}
        </p>
      </div>
      <div className="srvColumn">
        <Header as="h3">Wine Education</Header>
        <p>
          Have you ever wondered why your wine smells like raspberries? Sip and
          Stir offer Wine Education classes as well as in-home tastings to hone
          your palette and make you the star of your next blind tasting evening
          with friends.
        </p>
      </div>
      <div className="srvColumn">
        <Header as="h3">Cocktail Education</Header>
        <p>
          Are you a restaurant/bar owner who’s looking to seasonally change or
          overhaul your wine and cocktail menu? Sip and Stir can offer you
          guidance on whatever direction you would like to advance your program.{" "}
        </p>
      </div>
    </div>
  </>
);
// Image by <a href="https://pixabay.com/users/FotografieLink-6316043/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2697945">Igor Link</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2697945">Pixabay</a>
export default Services;
