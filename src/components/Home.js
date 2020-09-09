import React from 'react'
import {Link} from 'react-router-dom'
import {Header, Image, Button, Item} from 'semantic-ui-react'
import Twitter from './Twitter.js'
import Cocktail from '../images/cocktail.jpg'
import { Parallax,} from 'react-parallax';
import SipLogo from "../images/Sip&Stir_Black.png"
import HeadShot from "../images/headshotSample.jpg"
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
   width: '40vw',
   height: '40vh',
 };

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
         alt= "Sip & Stir Logo"
         size= "big"
         style={insideStyles}
         />
      </div>
   </Parallax>
  
  <div className="homeContentGrid ">
     <div className='about'>
      <Header.Content as="h1" style={{padding: "1rem 1rem 0 1rem"}} >Welcome to Sip & Stir Bar Services</Header.Content>
      <Header.Content as="p" style={{padding: "1rem 5rem 0 5rem"}} >We are committed to creating an elevated bar experience for your special event. Organizing an event is hard enough, with many moving parts to put together before the big day, why not let us take charge of the beverages so you can focus on your guests and enjoy yourself. </Header.Content>
      <Header.Content as="h4" style={{margin: "0px", padding: "1rem 1rem 0 1rem"}} >"Let us create an elevated cocktail and wine experience for your home, private event, or corporate function."</Header.Content>
      <Header.Content as="h4" style={{margin: '0px '}}>~ Sean Palmer ~</Header.Content>
      <Header.Content as="p" style={{marginBottom: "2rem"}}>Chief Mixologist, Sommelier and Founder</Header.Content>
        <Link to="/contact">
         <Button >Request Quote</Button>
        </Link>
     </div>
     <div className='history'>
      <div className="aboutUs">
        <Header.Content as="h2" style={{padding: "1rem 2rem 0 2rem"}} >About Us:</Header.Content>
        <Header.Content as="p" style={{padding: "1rem 2rem 0 2rem"}}>Sip & Stir is the culmination of years of experience in the hospitality world, pulling from a plethora of local talent, ingredients, and fine spirits, we guarantee to surprise and delight your guests. Our founder, Sean Palmer, has worked in some of Park City's and San Francisco's best wine and spirit programs while working alongside producers and purveyors to bring the best products to you. When returning to Park City in 2015, he was quickly hired to run the bar program at Handle restaurant. Bringing extensive knowledge of wine and cocktails to this program proved to be successful, with the growth of Handle’s bar crowd and return clientele, that showed up to enjoy the new cocktails and wine week after week. Before leaving for San Francisco to expand his expertise, Sean worked at The Farm at Canyons Village, where his love affair with wine blossomed. The Farm, at the time, had an extensive wine list and collection under the Talisker management. </Header.Content>
      </div>
     </div>
      <div className="meetMe">
         <Header.Content as="h2" style={{padding: "1rem 2rem 0 2rem"}}>Meet Our Founder:</Header.Content>
         <div className="meetMeContent">
         <Image
            src= {HeadShot}
            alt= "Sean Palmer HeadShot"
            style={headShotStyles}
          />
          <div>
           <Header.Content as="p" style={{padding: "1rem 1rem"}}>
            Sean Palmer has worked in restaurants for most of his adult life. Starting in Maryland, busing tables to earn money in high school for snowboard trips, all the way to the other coast to work in San Francisco’s famed fine dining restaurant, Spruce. 
           </Header.Content>
           <Header.Content as="p" style={{padding: "1rem 1rem"}}>
            Sean Palmer has worked in restaurants for most of his adult life. Starting in Maryland, busing tables to earn money in high school for snowboard trips, all the way to the other coast to work in San Francisco’s famed fine dining restaurant, Spruce. 
           </Header.Content>
          </div>
        </div>
      </div>
      <div className='col-3'>
      <Twitter/>
     </div>
   </div>
  
</>
)

export default Home;