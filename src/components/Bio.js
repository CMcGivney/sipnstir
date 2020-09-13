import React from 'react';
import {Image, Item,} from 'semantic-ui-react'
import HeadShot from "../images/headShot.jpg"

const Bio = () => (

 <Item.Group className="bioContent">
  <Item className="projectCards" >
   <Image
     src={HeadShot}
     alt="Head shot of sean palmer the founder"
     className="img_HShot"
     size="medium"
    />
   <Item.Content>
    <Item.Header as='h2' className="cardHead" style={{color: 'white'}}>Meet The Founder</Item.Header>
    <Item.Description as="p" className="cardMeta" style={{color: 'white'}}>
    Sean Palmer has worked in restaurants for most of his adult life. Starting in Maryland, busing tables to earn money in high school for snowboard trips, to Park City’s Farm Restaurant at Canyons Village to San Francisco’s famed fine dining restaurant and bar, <a href="http://www.spruceSF.com" alt="Spruce San Francisco Website">Spruce</a>. The outdoor lifestyle brought him back to “the best snow on earth” and he can’t wait to share everything he has learned with you! 
    </Item.Description>
    <Item.Description as="p" className="cardMeta" style={{color: 'white'}}>
    As a certified Sommelier, with many years on the dining room and winery floor, Sean loves to pair guests with the perfect bottle of wine or lively libation. As the bar & wine manager at <a href="https://handleparkcity.com/">Handle</a> restaurant, he was passionate about curating a wine and cocktail list that respected the classics while expanding flavor profiles for the patrons. Let him put a custom bar package together for your next event.
    </Item.Description>
   </Item.Content>    
  </Item>
  
 

</Item.Group>

)
export default Bio