import React from 'react'
import {Header, Card,} from 'semantic-ui-react'

class FAQS {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

let faqsArray = [];
let alcohol, lrgEvents, wineClass

alcohol = new FAQS("Q: Can I buy alcohol through you?", "A: Yes I can special order wine or place an order for alcohol and pick it up for a nominal fee.")
faqsArray.push(alcohol)

lrgEvents = new FAQS("Q: What size events can you service?", "A: We can serve any size event, just request a custom quote")
faqsArray.push(lrgEvents)

wineClass = new FAQS("Q: Do you offer wine education?", "A: Yes we offer wine education, for your home, restaurant or bar staff")
faqsArray.push(wineClass)

const Faq = () => (
  <div className="faqs">
    <Header.Content as="h1" style={{marginTop: "5rem", textAlign: 'center'}}>Frequently Ask Questions</Header.Content>
  <div className="faqContainer">
    <Card.Group className="cardContainer" stackable>
     {faqsArray.map( (qa, index) => 
       <Card className="faqCard" key={index}>
        <Card.Header className="cardHead">{qa.question}</Card.Header>
        <Card.Meta className="cardMeta">{qa.answer}</Card.Meta>
       </Card>
      )
     }
    </Card.Group>
   </div>
  </div>
)

export default Faq;