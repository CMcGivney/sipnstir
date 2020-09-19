import React from 'react'
import {Header, Icon, Image} from 'semantic-ui-react'
import SocialFollow from './SocialFollows'


class Footer extends React.Component {

 
  render() {
    return (
        <>
        <div className="footerFlex">
          <div className='mainFooter'>
           <Image
            src= "https://res.cloudinary.com/cmmc/image/upload/q_auto,f_auto/v1600533758/sipnstir/Sip_Stir_Black_qqkxj9.png"
            alt= "Sip & Stir Logo"
            size= "small"
           />
          </div>
        <div className="footerData">
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
               href="https://www.google.com/maps/place/347+Keetly+Station+Cir,+Heber+City,+UT+84032/@40.6555831,-111.4101602,18z/data=!3m1!4b1!4m5!3m4!1s0x87520d95d8f3e183:0xcb108bcc4af3288d!8m2!3d40.655582!4d-111.409587"
               >347 Keetly Station Circle Heber City, UT 84032
             </a>
            </Header.Content>
           </div>
          <div className='emailBox'>
            <Header.Content as='h4'>
              <Icon name="mail"/>
              <a className="email" href="mailto:sipandstirpc@gmail.com">SipAndStirPC@gmail.com</a>
              </Header.Content>
           </div>
          </div>
           <div className='socialFollows'>
            <Header.Content>
             <SocialFollow/>
            </Header.Content>
           </div>
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
/* <Header.Content className="poweredBy">
 Powered by: <a className="email" href="https://chris-portfo.herokuapp.com/">84Creations</a>
</Header.Content> */