import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import Nav from "../components/NavBar.js";
import { FaqContext, FaqProvider } from "../Context/FaqContext";

const FaqComponent = () => {
  const { faqsArray } = useContext(FaqContext);

  return (
    <>
      <Helmet>
        <title>Sip & Stir Bar Services FAQ</title>
        <meta
          name="description"
          content="Sip & Stir is a bartending service based in Park City. Our bartenders service weddings and other events throughout Utah. Call for your quote today!"
        />
      </Helmet>
      <Nav />
      
        <h2 className="pageHeader">Frequently Ask Questions</h2>
        <div className="faqContainer">
          <Card.Group className="cardContainer" stackable>
            {faqsArray.map((qa, index) => (
              <Card raised className="faqCard" key={index}>
                <Card.Header className="cardHead">{qa.question}</Card.Header>
                <Card.Meta className="cardMeta">{qa.answer}</Card.Meta>
              </Card>
            ))}
          </Card.Group>
        </div>
     
    </>
  );
};
const Faq = () => {
  return (
    <FaqProvider>
      <FaqComponent></FaqComponent>
    </FaqProvider>
  );
};
export default Faq;
