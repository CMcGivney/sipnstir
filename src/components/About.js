import React from "react";
import { Header } from "semantic-ui-react";

let tempDate = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = days[tempDate.getDay()];

const About = () => (
  <section className="about">
  <div className="motto_first" style= {{textAlign: "center",}}>
    <h3 style={{ margin: "0 0 0 0 "}}>Welcome</h3>
    <h3 style={{ margin: "0 0 1rem 0 "}} >Happy {dayName} Everyone!</h3>
    </div>
    <Header.Content as="p" className="motto_first">
      Here at Sip & Stir we are committed to creating an elevated beverage
      experience for your special event. Organizing an event presents many
      challenges, let us create a personalized beverage plan for you so you can
      enjoy the celebration with family, friends, and colleagues.
    </Header.Content>
    <Header.Content as="p" className="motto_first">
      Sip and Stir is the culmination of years of experience in the hospitality
      world, pulling from a plethora of local talent, ingredients, and fine
      spirits, we guarantee to surprise and delight your guests. Our founder,
      Sean Palmer, has worked in some of Park City and San Francisco’s best wine
      and spirit programs while working alongside producers and purveyors to
      bring the best products to you. With this extensive background to pull
      from, it was time to take a leap and start a business that focused on the
      guest experience, with in-home wine and cocktail service, Sip and Stir is
      born.
    </Header.Content>
    <Header.Content
      as="p"
      className="motto_first"
      style={{ marginBottom: "1rem" }}
    >
      In addition to providing a mobile bar service for your event, we offer
      wine education, seasonal cocktail classes, and cellar management. Request
      a quote today!
    </Header.Content>
  </section>
);

export default About;
