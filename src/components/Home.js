import React from 'react'
import {Header, Icon} from 'semantic-ui-react'
import Twitter from './Twitter.js'
import Cocktail from '../images/cocktail.jpg'
import { Parallax,} from 'react-parallax';


const insideStyles = {
   padding: 20,
   position: "absolute",
   top: "55%",
   left: "50%",
   transform: "translate(-50%,-50%)",
   borderRadius: "50%",
   height: '20rem',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center'
 };

const Home = () => (
 <>
     <Parallax
      bgImage={Cocktail}
      bgImageAlt="SLC Mountains covered in snow"
      strength={-300}
       >
      <div className="titleBox">
        <div style={insideStyles}>
         <Header.Content className="mainHeader" as="h1" style={{margin: "0 0 0 0", color: "white"}}>Sip <Icon name="glass martini" color="olive"/><Icon name="spoon" color="olive"/>Stir</Header.Content>
         {/* <Header.Content as="h5" className="motto" style={{margin: ".4em 0 0 0"}}>"Motto or Mission Statement"</Header.Content> */}
       </div>
      </div>
   </Parallax>
  
  <div className="homeContentGrid ">
     <div className='about'>
      <Header.Content as="h3" style={{padding: "1rem 1rem 1rem 1rem"}} >"Let us bring the Michelin hospitality experience to you! In home hospitality, events, wine education, cellar management"</Header.Content>
      <Header.Content as="p">Sip & Stir Promise</Header.Content>
     </div>
     <div className='col-2'>
     <Header.Content as="h3" >List of Accomplishments and/or Reviews </Header.Content>
      </div>
      <div className='col-3'>
      <Twitter/>
     </div>
   </div>
  
</>
)

export default Home;