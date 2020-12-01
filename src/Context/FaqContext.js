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
  let alcohol, lrgEvents, wineClass, diningOptions, serviceProvided;

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

  diningOptions = new FAQS(
    "Q: Do you offer dining options?",
    "A: Sip and Sir focus exclusively on beverage services but I work with many in-home chefs who specialize in many different cuisines. Let me know what you're interested in and we can find a chef and a wine experience that’s perfect for you."
  );
  faqsArray.push(diningOptions);

  serviceProvided = new FAQS(
    "Q: What do Sip and Stir provide?",
    "A: Sip and Stir provide everything you need for a seamless beverage experience. Please contact me for details as we cater to your specific needs. We offer various handcrafted syrups and mixers as well as the basics (soda water, tonic, fruit, etc) Glassware (up to 25 people) and a mobile bar can also be arranged."
  );
  faqsArray.push(serviceProvided);

  return (
    <FaqContext.Provider value={{ faqsArray }}>{children}</FaqContext.Provider>
  );
};

export { FaqContext, FaqProvider };
