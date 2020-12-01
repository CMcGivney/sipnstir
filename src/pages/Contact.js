import React from "react";
import ContactForm from "../components/ContactForm";
import Nav from "../components/NavBar.js";

const Contact = () => (
    <div className="contact">
      <Nav/>
      <h1 className="pageHeader" >Lets Connect, Request A Quote</h1>
      <ContactForm />
    </div>
  );
export default Contact;
