import React from 'react'
import {Link} from 'react-router-dom'
import {Header, Image, Button, Container} from 'semantic-ui-react'
import Twitter from './Twitter.js'
import Cocktail from '../images/cocktail.jpg'
import { Parallax,} from 'react-parallax';
import SipLogo from "../images/Sip&Stir_Black.png"


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

const Home = () => (
 <>
     <Parallax
      style={{padding: '0', width: '100vw', }}
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
      <Header.Content as="h3" style={{padding: "1rem 1rem 0 1rem"}} >"Let us create an elevated cocktail and wine experience for your home, private event, or corporate function."</Header.Content>
      <Header.Content as="p" style={{marginBottom: "2rem"}}>~Sean Palmer, Chief Mixologist, Sommelier and Founder~</Header.Content>
        <Link to="/contact">
         <Button >Request Quote</Button>
        </Link>
     </div>
      <div className='col-3'>
      <Twitter/>
     </div>
   </div>
  
</>
)

export default Home;