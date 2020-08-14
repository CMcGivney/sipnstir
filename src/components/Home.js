import React from 'react'
import {Header, Image} from 'semantic-ui-react'
import Twitter from './Twitter.js'
import Cocktail from '../images/cocktail.jpg'
import { Parallax,} from 'react-parallax';
import SipLogo from "../images/SipLogo.PNG"


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
      <Header.Content as="h3" style={{padding: "1rem 1rem 1rem 1rem"}} >"Let us bring the Michelin hospitality experience to you!"</Header.Content>
      <Header.Content as="p">In home hospitality, events, wine education, cellar management</Header.Content>
     </div>
     <div className='col-2'>
     <Header.Content as="h3" >Reviews maybe here </Header.Content>
      </div>
      <div className='col-3'>
      <Twitter/>
     </div>
   </div>
  
</>
)

export default Home;