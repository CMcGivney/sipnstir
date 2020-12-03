import React from "react";

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
    <div className="greetings">
      <h3 style={{ margin: "0 .5rem 0 0 " }}>Welcome Everyone</h3>
      <h3 style={{ margin: "0 0 0 0 " }}> Happy {dayName}!</h3>
    </div>
    <div className="aboutContent">
      <p>
        Here at Sip & Stir we are committed to creating an elevated beverage
        experience for your special event. Organizing an event presents many
        challenges, let us create a personalized beverage plan for you so you
        can enjoy the celebration with family, friends, and colleagues.
      </p>
      <p>
        Sip and Stir is the culmination of years of experience in the
        hospitality world, pulling from a plethora of local talent, ingredients,
        and fine spirits, we guarantee to surprise and delight your guests. Our
        founder, Sean Palmer, has worked in some of Park City and San
        Francisco’s best wine and spirit programs while working alongside
        producers and purveyors to bring the best products to you. With this
        extensive background to pull from, it was time to take a leap and start
        a business that focused on the guest experience, with in-home wine and
        cocktail service, Sip and Stir is born.
      </p>
      <p as="p" style={{ marginBottom: "1rem" }}>
        In addition to providing a mobile bar service for your event, we offer
        wine education, seasonal cocktail classes, and cellar management.
        Request a quote today!
      </p>
    </div>
  </section>
);

export default About;
