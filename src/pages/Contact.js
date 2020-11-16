import React from "react";
import ContactForm from "../components/ContactForm";
import Nav from "../components/NavBar.js";
import { useScrollHandler } from "../Hooks/useScrollHandler.js";

const Contact = () => {
  const scroll = useScrollHandler();
  const bar = scroll !== false ? <Nav /> : null;
  return (
    <div className="contact">
      {bar}
      <ContactForm />
    </div>
  );
};
export default Contact;
