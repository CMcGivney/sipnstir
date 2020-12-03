import React from "react";
import ContactForm from "../components/ContactForm";
import Nav from "../components/NavBar.js";

const Contact = () => (
  <>
    <Nav />
    <div className="contact">
      <h1 className="pageHeader">Lets Connect</h1>
      <p>*Request A Quote*</p>
  
      <ContactForm />
    </div>
  </>
);
export default Contact;
