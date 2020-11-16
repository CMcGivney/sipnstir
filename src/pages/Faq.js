import React, { useContext } from "react";
import { Header, Card } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import { useScrollHandler } from "../Hooks/useScrollHandler.js";
import Nav from "../components/NavBar.js";
import { FaqContext, FaqProvider } from "../Context/FaqContext";

const FaqComponent = () => {
  const { faqsArray } = useContext(FaqContext);
  const scroll = useScrollHandler();
  const bar = scroll !== false ? <Nav /> : null;
  return (
    <>
      <Helmet>
        <title>Sip & Stir Bar Services FAQ</title>
        <meta
          name="description"
          content="Sip & Stir is a bartending service based in Park City. Our bartenders service weddings and other events throughout Utah. Call for your quote today!"
        />
      </Helmet>
      {bar}
      <div className="faqs">
        <Header.Content
          as="h1"
          style={{ marginTop: "6rem", textAlign: "center" }}
        >
          Frequently Ask Questions
        </Header.Content>
        <div className="faqContainer">
          <Card.Group className="cardContainer" stackable>
            {faqsArray.map((qa, index) => (
              <Card className="faqCard" key={index}>
                <Card.Header className="cardHead">{qa.question}</Card.Header>
                <Card.Meta className="cardMeta">{qa.answer}</Card.Meta>
              </Card>
            ))}
          </Card.Group>
        </div>
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