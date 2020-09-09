import React from 'react'
import {Link} from 'react-router-dom'
import {Header, Image, Button,} from 'semantic-ui-react'
import Twitter from './Twitter.js'
import Cocktail from '../images/cocktail.jpg'
import { Parallax,} from 'react-parallax';
import SipLogo from "../images/Sip&Stir_Black.png"
import HeadShot from "../images/headShot.jpg"
import {Helmet} from 'react-helmet'


const insideStyles = {
   padding: 20,
   position: "absolute",
   top: "55%",
   left: "50%",
   transform: "translate(-50%,-50%)",
   borderRadius: "15%",
   height: '30rem',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center', 
 };
const headShotStyles = {
   width: '25vw',
   height: '25vh',
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
      bgImage={Cocktail}
      bgImageAlt="A cocktail being poured over ice"
      strength={-300}
       >
      <div className="titleBox">
        <Image
         src= {SipLogo}
         alt= "Sip And Stir"
         size= "big"
         style={insideStyles}
         />
      </div>
   </Parallax>
  
  <div className="homeContentGrid ">

     <div className='about'>
      <Header.Content as="p" className="motto_first">Welcome, We hope your {dayName} is treating you well.</Header.Content>
      <Header.Content as="p" className="motto_first">Here at Sip & Stir we are committed to creating an elevated beverage experience for your special event. Organizing an event presents many challenges, let us create a personalized beverage plan for you so you can enjoy the celebration with family, friends, and colleagues.</Header.Content>
      <Header.Content as="p" className="motto_first">In addition to providing a mobile bar service for your event, we offer wine education, seasonal cocktail classes, and cellar management. Request a quote today!</Header.Content>
      </div>

      <div className="motto">
      <Header.Content as="h4" style={{margin: "0px", padding: "1rem 1rem 0 1rem"}} >"I can’t wait to share everything I’ve learned in my 15+ years in hospitality with you and your guests! "</Header.Content>
      <Header.Content as="h4" style={{margin: '0px '}}>~ Sean Palmer ~</Header.Content>
      <Header.Content as="p" style={{marginBottom: "2rem"}}>Chief Mixologist, Sommelier and Founder</Header.Content>
        <Link to="/contact">
         <Button >Request Quote</Button>
        </Link>
     </div>

     <div className='history'>
        <Header.Content as="h2" style={{padding: "1rem 2rem 0 2rem"}} >Our History:</Header.Content>
        <Header.Content as="p" style={{padding: "1rem 2rem 0 2rem"}}>Sip & Stir is the culmination of years of experience in the hospitality world, pulling from a plethora of local talent, ingredients, and fine spirits, we guarantee to surprise and delight your guests. Our founder, Sean Palmer, has worked in some of Park City's and San Francisco's best wine and spirit programs while working alongside producers and purveyors to bring the best products to you. When returning to Park City in 2015, he was quickly hired to run the bar program at Handle restaurant. Bringing extensive knowledge of wine and cocktails to this program proved to be successful, with the growth of Handle’s bar crowd and return clientele, that showed up to enjoy the new cocktails and wine week after week. Before leaving for San Francisco to expand his expertise, Sean worked at The Farm at Canyons Village, where his love affair with wine blossomed. The Farm, at the time, had an extensive wine list and collection under the Talisker management. </Header.Content>
     </div>

      <div className="meetMe">
         <Header.Content as="h2" style={{padding: "1rem 2rem 0 2rem"}}>Meet Our Founder:</Header.Content>
         <div className="meetMeContent">
           <Header.Content as="p" style={{padding: "1rem 1rem"}} className="shortBio">
           Sean Palmer has worked in restaurants for most of his adult life. Starting in Maryland, busing tables to earn money in high school for snowboard trips, to Park City’s Farm Restaurant at Canyons Village to San Francisco’s famed fine dining restaurant, Spruce, and back again to Utah. The outdoor lifestyle brought him back to “the best snow on earth” and he can’t wait to share everything he has learned with you! 
           </Header.Content>
           
         <Image
            src= {HeadShot}
            alt= "Sean Palmer HeadShot"
            style={headShotStyles}
          />
         
           <Header.Content as="p" style={{padding: "1rem 1rem"}} className="shortBio">
           As a certified Sommelier, with many years on the dining room and winery floor, Sean loves to pair guests with the perfect bottle of wine or lively libation. As the bar & wine manager at Handle restaurant, he was passionate about curating a wine and cocktail list that respected the classics while expanding flavor profiles for the patrons. Let him put a custom bar package together for your next event.           </Header.Content>
         
        </div>
      </div>

      <div className='col-3'>
      <Header.Content as="h2">Wanna see we are up too?</Header.Content>
      <Twitter/>
     </div>

   </div>
  
</>
)

export default Home;