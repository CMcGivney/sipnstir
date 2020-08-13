import React from 'react'
import {Header, Icon} from 'semantic-ui-react'
import SocialFollow from './SocialFollows'

class Footer extends React.Component {

 
  render() {
    return (
        <>
        <div className="footerFlex">
          <div className='mainFooter'>
           <Header as="h2">Park City Sip & Stir</Header>
          </div>
          <div className='phoneNum'>
            <Header.Content as="h4">
              <Icon name="phone"/>
              <a className="email" href="tel:+1-301-992-7829">1-(301)-992-7829</a>
            </Header.Content>
           </div>
          <div className='bizAddress'>
            <Header.Content as='h4'>
            business address here
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
          <div className="poweredBy">
            <Header.Content>
              Powered by: <a className="email" href="https://chris-portfo.herokuapp.com/">84Creations</a>
             </Header.Content>
          </div>
        </div>

        </>
    )
    }
  }
    export default Footer