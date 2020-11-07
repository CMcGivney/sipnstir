import React from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Motto = () => (
  <section className="motto">
    <Header.Content as="h4" style={{ margin: ".5rem" }}>
      "I can’t wait to share everything I’ve learned in my 15+ years in
      hospitality with you and your guests! "
    </Header.Content>
    <Header.Content as="h4" style={{ margin: "0px " }}>
      ~ Sean Palmer ~
    </Header.Content>
    <Header.Content as="p" style={{ marginBottom: "2rem" }}>
      Chief Mixologist, Sommelier and Founder
    </Header.Content>
    <Link to="/contact">
      <Button>Request Quote</Button>
    </Link>
  </section>
);
export default Motto;
