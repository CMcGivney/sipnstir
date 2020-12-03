import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Motto = () => (
  <section className="motto">
    <div className="motto_first">
      <h4 style={{ margin: "auto" }}>
        "I can’t wait to share everything I’ve learned in my 15+ years in
        hospitality with you and your guests! "
      </h4>
      <h4 style={{ margin: "0px " }}>~ Sean Palmer ~</h4>
      <p style={{ marginBottom: "2rem" }}>
        Chief Mixologist, Sommelier and Founder
      </p>
      <Link to="/contact">
        <Button
          inverted
          content="Request Quote"
          color="green"
          icon="right arrow"
          labelPosition="right"
        ></Button>
      </Link>
    </div>
  </section>
);
export default Motto;
