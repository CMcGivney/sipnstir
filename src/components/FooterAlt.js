import React from 'react'
import {Header, Icon, Image} from 'semantic-ui-react'
import SocialFollow from './SocialFollows'
import SipLogo from "../images/Sip&Stir_noBackground.png"

class Footer extends React.Component {

 
  render() {
    return (
        <>
        <div className="footerFlex">
          <div className='mainFooter'>
          <Image
         src= {SipLogo}
         alt= "Sip & Stir Logo"
         size= "small"
         />
          </div>
          <div className='phoneNum'>
            <Header.Content as="h4">
              <Icon name="phone"/>
              <a className="email" href="tel:+1-301-992-7829">1-(301)-992-7829</a>
            </Header.Content>
           </div>
          <div className='bizAddress'>
          <Header.Content>
             <Icon name="map pin"/>
             <a 
               className="email"  
               target="_blank" 
               rel="noopener noreferrer" 
               href="https://www.google.com/maps/place/Chartreuse+Diffusion+-+Chartreuse+Cellars/@45.2200382,5.2107894,7.57z/data=!4m5!3m4!1s0x478ae4465ad2c337:0x924f959dd7105812!8m2!3d45.362011!4d5.5978889?hl=en&authuser=0"
               >Your Business address Click Me!
             </a>
            </Header.Content>
           </div>
          <div className='emailBox'>
            <Header.Content as='h4'>
              <Icon name="mail"/>
              <a className="email" href="mailto:SeanPalmer@gmail.com">SeanPalmer155@gmail.com</a>
              </Header.Content>
         </div>
          <div className='socialFollows'>
            <Header.Content>
             <SocialFollow/>
            </Header.Content>
          </div>
             {/* <Header.Content className="poweredBy">
              Powered by: <a className="email" href="https://chris-portfo.herokuapp.com/">84Creations</a>
             </Header.Content> */}
          <div className="footerBottom">
             <Header.Content>
             © 2020 Sip & Stir Park City, Utah, all rights reserved.
             </Header.Content>
           </div>
        </div>
        </>
    )
    }
  }
    export default Footer