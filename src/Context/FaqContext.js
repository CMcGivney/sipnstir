import React, { createContext } from "react";

const FaqContext = createContext();

const FaqProvider = ({ children }) => {
  class FAQS {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }
  }
  
  let faqsArray = [];
  let alcohol, lrgEvents, wineClass;
  
  alcohol = new FAQS(
    "Q: Can I buy alcohol through you?",
    "A: Well, that's a tricky one. I can help you in choosing the right spirits and wine for your event. Contact me for details"
  );
  faqsArray.push(alcohol);
  
  lrgEvents = new FAQS(
    "Q: What size events can you service?",
    "A: We can serve any size event, from small to large. Request a custom quote"
  );
  faqsArray.push(lrgEvents);
  
  wineClass = new FAQS(
    "Q: Do you offer wine education?",
    "A: Yes we offer wine education, for your home, restaurant or bar staff"
  );
  faqsArray.push(wineClass);

return (
  <FaqContext.Provider value={{faqsArray}}>
    {children}
  </FaqContext.Provider>
);
};

export { FaqContext, FaqProvider };