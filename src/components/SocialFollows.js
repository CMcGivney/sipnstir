import React from "react"
import { Icon } from 'semantic-ui-react'


export default function SocialFollow() {
  return (
    <div>
     
      <a href="https://twitter.com/pc_sip" alt="twitter icon" className="twitter social">
      <Icon size="big" name="twitter" />
      </a>
      <a
        href="https://www.instagram.com/sipandstirpc/" alt="instagram icon" className="instagram social"
      >
         <Icon size="big" name="instagram" />
      </a>
      {/* <a
        href="https://www.facebook.com/sean.palmer.71"
        className="facebook social"
      >
        <Icon name="facebook" size="big" />
      </a> */}
    </div>
  )
}