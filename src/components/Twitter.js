import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton, } from 'react-twitter-embed';
import {Container} from 'semantic-ui-react'

const Twitter = () => (
  <Container style={{margin: "0 1rem 0 1rem"}}>
     <TwitterFollowButton
       screenName={'pc_sip'}
     />
     <TwitterTimelineEmbed
        sourceType="profile"
        screenName="pc_sip"
        options={{height: "100vh", width: "40rem"}}
        theme="dark"
     />
  </Container>
)

export default Twitter