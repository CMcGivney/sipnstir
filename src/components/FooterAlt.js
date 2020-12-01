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
            src= "https://res.cloudinary.com/cmmc/image/upload/dpr_auto,f_auto,q_auto/v1600533758/sipnstir/Sip_Stir_Black_qqkxj9.webp"
            alt= "Sip & Stir Logo"
            size= "small"
            href="/"
           />
          </div>
        <div className="footerData">
           <div className='phoneNum' as='h5'>
            <Header.Content >
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
               href="https://www.google.com/maps/place/Park+City,+UT+84060/@40.6169073,-111.5450997,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x87520f632c6303fd:0xd871c4df25375794!2sPark+City,+UT!3b1!8m2!3d40.6460622!4d-111.4979729!3m4!1s0x87527248a9a2324b:0x2621deb9ea016f8b!8m2!3d40.6184914!4d-111.5413444"
               >Park City, Utah
             </a>
            </Header.Content>
           </div>
          <div className='emailBox'>
            <Header.Content as='h5'>
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
          
             <Header.Content className="footerBottom">
             © 2020 Sip & Stir Park City, Utah, all rights reserved.
             </Header.Content>

        </div>
        </>
    )
  }
}
export default Footer
/* <Header.Content className="poweredBy">
 Powered by: <a className="email" href="https://chris-portfo.herokuapp.com/">84Creations</a>
</Header.Content> */