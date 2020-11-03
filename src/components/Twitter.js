import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton, } from 'react-twitter-embed';
import {Container, Header} from 'semantic-ui-react'

const Twitter = () => (
  <section className="twitters">
  <Header.Content as="h2">Want to see what we are up to?</Header.Content>
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
  </section>
)

export default Twitter