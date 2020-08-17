import React from 'react'
import {Header,} from "semantic-ui-react"


const Services = () => (
 <>
  <div className="services">
   <div className="SrvHeader">
      <Header.Content as="h1">Services We Provide</Header.Content>
   </div>
  </div>
   <div className="srvContent">
      <div className="srvColumn">
       <Header as="h3">Special Event Bartending</Header>
      </div>
      <div className="srvColumn">
       <Header as="h3" >Wine Cellar Management</Header>
      </div>
      <div className="srvColumn">
       <Header as="h3">Wine Education</Header> 
      </div>
      <div className="srvColumn">
       <Header as="h3">Cocktail Education</Header>
      </div>
   </div>
 </>
)
// Image by <a href="https://pixabay.com/users/FotografieLink-6316043/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2697945">Igor Link</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2697945">Pixabay</a>
export default Services;