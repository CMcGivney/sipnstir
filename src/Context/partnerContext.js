import React, { createContext } from "react";
import Logo from "../Images/Sip&Stir_noBackground.png";

const PartnerContext = createContext();

const BusinessProvider = ({ children }) => {
  class Partner {
    constructor(bizTitle, description, businessUrl, image, imageAlt) {
      this.bizTitle = bizTitle;
      this.description = description;
      this.businessUrl = businessUrl;
      this.image = image;
      this.imageAlt = imageAlt;
    }
  }
  let partnerArray = [];
  let onePartner,
    twoPartner,
    threePartner,
    fourPartner,
    fivePartner,
    sixPartner;

  onePartner = new Partner(
    "Hidden Peak Dining",
    "Brief description of business and cuisine or something, yada yada yada...",
    "https://www.hiddenpeakdining.com/about",
    Logo,
    "this is a logo for the company"
  );

  twoPartner = new Partner(
    "Partner Two",
    "Brief description of business and cuisine or something, yada yada yada... Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart. Brief description of business and cuisine or something, yada yada yada... Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart.",
    "https://www.hiddenpeakdining.com/about",
    Logo,
    "this is a logo for the company"
  );

  threePartner = new Partner(
    "Partner Three",
    "Brief description of business and cuisine or something, yada yada yada...",
    "https://www.hiddenpeakdining.com/about",
    Logo,
    "this is an image of the logo"
  );

  fourPartner = new Partner(
    "Partner Four",
    "Brief description of business and cuisine or something, yada yada yada...",
    "https://www.hiddenpeakdining.com/about",
    Logo,
    "this is a logo for the company"
  );

  fivePartner = new Partner(
    "Partner Five",
    "Brief description of business and cuisine or something, yada yada yada...",
    "https://www.hiddenpeakdining.com/about",
    Logo,
    "this is a logo for the company"
  );

  sixPartner = new Partner(
    "Partner Six",
    "Brief description of business and cuisine or something, yada yada yada...",
    "https://www.hiddenpeakdining.com/about",
    Logo,
    "this is a logo for the company"
  );
  partnerArray.push(
    onePartner,
    twoPartner,
    threePartner,
    fourPartner,
    fivePartner,
    sixPartner
  );

  return (
    <PartnerContext.Provider value={{ partnerArray }}>
      {children}
    </PartnerContext.Provider>
  );
};

export { PartnerContext, BusinessProvider };
