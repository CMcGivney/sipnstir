import React, { useContext } from "react";
import { Helmet } from "react-helmet";
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

      <h2 className="pageHeader" style={{marginTop: "8rem"}}>Frequently Ask Questions</h2>

      <div className="faqContainer">
        {faqsArray.map((qa, index) => (
          <div className="faqCard" key={index}>
            <h3 className="cardHead">{qa.question}</h3>
            <p className="cardMeta">{qa.answer}</p>
          </div>
        ))}
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
