import React from 'react'
import {Link} from 'react-router-dom'
import {Header, Image, Button,} from 'semantic-ui-react'
import Twitter from './Twitter.js'
import { Parallax,} from 'react-parallax';
import Bio from './Bio.js'
import {Helmet} from 'react-helmet'


const insideStyles = {
   position: "absolute",
   top: "55%",
   left: "50%",
   transform: "translate(-50%,-50%)",
   borderRadius: "15%",
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center', 
   padding: '0rem 1rem'
 };

   var tempDate = new Date();
   const days = [
     'Sunday',
     'Monday',
     'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday',
     'Saturday'
   ]
   const dayName = days[tempDate.getDay()]
 
const Home = () => (
 <>
   <Helmet
     title="Sip & Stir Bar Services"
     meta= {[
       {"name":"description", "content":"Sip & Stir is a bartending service based in Park City. Our bartenders service weddings and other events throughout Utah. Call for your quote today!"},
       {property: "og:url", content: "https://sipandstirpc.com/"}
       ]}
      />

   <Parallax

      bgImage="http://res.cloudinary.com/cmmc/image/upload/q_auto,f_auto/v1600533723/sipnstir/cocktail_tz01ky.jpg"
      bgImageAlt="A cocktail being poured over ice"
      strength={-300}
       >
      <div className="titleBox">
        <Image
         src= "https://res.cloudinary.com/cmmc/image/upload/q_auto,f_auto/v1600533758/sipnstir/Sip_Stir_Black_qqkxj9.png"
         alt= "Sip And Stir"
         size= "big"
         style={insideStyles}
         />
      </div>
   </Parallax>
  
  <div className="homeContentGrid ">

     <section className='about'>
      <Header.Content as="h3" className="motto_first">Welcome, Happy {dayName} Everyone!</Header.Content>
      <Header.Content as="p" className="motto_first">Here at Sip & Stir we are committed to creating an elevated beverage experience for your special event. Organizing an event presents many challenges, let us create a personalized beverage plan for you so you can enjoy the celebration with family, friends, and colleagues.</Header.Content>
      <Header.Content as="p" className="motto_first" style={{marginBottom:"1rem"}}>In addition to providing a mobile bar service for your event, we offer wine education, seasonal cocktail classes, and cellar management. Request a quote today!</Header.Content>
      </section>

      <section className="motto">
      <Header.Content as="h4" style={{margin: ".5rem"}} >"I can’t wait to share everything I’ve learned in my 15+ years in hospitality with you and your guests! "</Header.Content>
      <Header.Content as="h4" style={{margin: '0px '}}>~ Sean Palmer ~</Header.Content>
      <Header.Content as="p" style={{marginBottom: "2rem"}}>Chief Mixologist, Sommelier and Founder</Header.Content>
      <Link to="/contact">
         <Button>Request Quote</Button>
       </Link>
     </section>
     <section className='history'>
        <Header.Content as="h2" style={{padding: "1rem 1rem 0 1rem"}}>How it all started:</Header.Content>
        <Header.Content as="p" style={{padding: "0 1rem"}}>
         Sip and Stir is the culmination of years of experience in the hospitality world, pulling from a plethora of local talent, ingredients, and fine spirits, we guarantee to surprise and delight your guests. Our founder, Sean Palmer, has worked in some of Park City and San Francisco’s best wine and spirit programs while working alongside producers and purveyors to bring the best products to you. With this extensive background to pull from, it was time to take a leap and start a business that focused on the guest experience,  with in-home wine and cocktail service, Sip and Stir is born.
         </Header.Content>
     </section>
     <section className="bio">
      <Bio/>
     </section>
     <section className='twitters'>
      <Header.Content as="h2">Want to see what we are up to?</Header.Content>
      <Twitter/>
     </section>

   </div>
  
</>
)

export default Home;