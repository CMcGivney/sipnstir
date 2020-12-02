import React, { useContext } from "react";
import NavBar from "../components/NavBar.js";
import { PartnerContext, BusinessProvider } from "../Context/partnerContext.js";

const PartnersComponent = () => {
  const { partnerArray } = useContext(PartnerContext);

  return (
    <>
      <NavBar />
      <h2 className="pageHeader">Our Delectable Dining Partners</h2>
      <div className="partnerContainer">
        {partnerArray.map((p, index) => (
          <div key={index} className="partnerCard">
            <div className="cardHeader">
              <img
                src={p.image}
                alt={p.imageAlt}
                width="50rem"
                height="50rem"
              />
              <h3>
                <a className="businessTitle" href={p.businessUrl} alt={p.bizTitle}>
                  {p.bizTitle}
                </a>
              </h3>
            </div>
            <br />
            <p className="description"> {p.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const Partner = () => {
  return (
    <BusinessProvider>
      <PartnersComponent></PartnersComponent>
    </BusinessProvider>
  );
};

export default Partner;
