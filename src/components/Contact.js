import React from 'react'
import {Header,} from 'semantic-ui-react'
import ContactForm from './ContactForm'


const Contact = () => (
 <>
  <div className="contact">
  <Header.Content className="headerCont" as="h1">Lets Connect</Header.Content>
    <ContactForm/>
   </div>
       

 </>
)

export default Contact;