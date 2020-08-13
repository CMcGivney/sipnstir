import React from 'react'
import {Header, Image, Card} from 'semantic-ui-react'
import Margarita from "../images/margarita.jpg"
import Manhattan from "../images/manhattan.jpg"
import WeedSour from "../images/weedSour.jpg"


const Press = () => (
<>
  <Header.Content as="h1" style={{marginTop: '5rem', textAlign: 'center'}}>Cocktail Menu</Header.Content>
   <div className="cocktailContainer">
  <Card.Group className="cocktailCard" stackable >
    <Card >
      <Image
        src= {Margarita}
        alt= "margarita with a twist"
        size= "medium"
        
      />
       <Card.Header as="h4" textAlign="center">Classic Margarita</Card.Header>
        <ul>
         <li><Card.Description>House Blue Agave Tequila</Card.Description></li>
         <li><Card.Description>Fresh Lime Juice</Card.Description></li>
         <li><Card.Description>Contreau</Card.Description></li>
         <li><Card.Description>Agave Simple Syrup</Card.Description></li>
        </ul>
    </Card>
    <Card >
      <Image
        src= {Manhattan}
        alt= "manhattan with cherry"
        size= "medium"
      />
       <Card.Content>
       <Card.Header as="h4" textAlign="center">Classic Manhattan</Card.Header>
        <ul>
         <li><Card.Description>House Rye Whiskey</Card.Description></li>
         <li><Card.Description>Angostura Bitters</Card.Description></li>
         <li><Card.Description>Carpono Antica Sweet Vermouth</Card.Description></li>
         <li><Card.Description>Brandied Cherries</Card.Description></li>
        </ul>
        </Card.Content>
    </Card>
    <Card >
      <Image
        src= {WeedSour}
        alt= "Weed Sour with Egg White Foam"
        width="100%"
        height="200px"
      />
      <Card.Content>
       <Card.Header as="h4" textAlign="center">Herbaceous Whiskey Sour</Card.Header>
        <ul>
         <li><Card.Description>House Whiskey</Card.Description></li>
         <li><Card.Description>Fresh Lemon Juice</Card.Description></li>
         <li><Card.Description>Absenthe</Card.Description></li>
         <li><Card.Description>Simple Syrup</Card.Description></li>
        </ul>
        </Card.Content>
    </Card>
    <Card >
      <Image
        src= {Margarita}
        alt= "margarita with a twist"
        size= "medium"
      />
       <Card.Content>
       <Card.Header as="h4" textAlign="center">Classic Margarita</Card.Header>
        <ul>
         <li><Card.Description>House Blue Agave Tequila</Card.Description></li>
         <li><Card.Description>Fresh Lime Juice</Card.Description></li>
         <li><Card.Description>Contreau</Card.Description></li>
         <li><Card.Description>Agave Simple Syrup</Card.Description></li>
        </ul>
        </Card.Content>
    </Card>
    <Card >
      <Image
        src= {Margarita}
        alt= "margarita with a twist"
        size= "medium"
      />
      <Card.Content>
       <Card.Header as="h4" textAlign="center">Classic Margarita</Card.Header>
        <ul>
         <li><Card.Description>House Blue Agave Tequila</Card.Description></li>
         <li><Card.Description>Fresh Lime Juice</Card.Description></li>
         <li><Card.Description>Contreau</Card.Description></li>
         <li><Card.Description>Agave Simple Syrup</Card.Description></li>
        </ul>
        </Card.Content>
    </Card>
   </Card.Group>
  </div>
 </>
)

export default Press;