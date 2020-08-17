import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton, } from 'react-twitter-embed';
import {Container} from 'semantic-ui-react'

const Twitter = () => (
  <Container style={{margin: "0 1em 0 1em"}}>
     <TwitterFollowButton
       screenName={'pc_sip'}
       sameSite="strict"
     />
     <TwitterTimelineEmbed
        sourceType="profile"
        screenName="pc_sip"
        options={{height: "38em", width: "30em"}}
        sameSite="strict"
     />
  </Container>
)

export default Twitter