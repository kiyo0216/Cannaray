import React from 'react'
import { Footer } from '../components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Links>
        <Footer.Link>
          Contact
        </Footer.Link>
        <Footer.Link>
          Locations
        </Footer.Link>
        <Footer.Link>
          FAQs
        </Footer.Link>
        <Footer.Link>
          Lab Reports
        </Footer.Link>
        <Footer.Link>
          Delivery and Returns
        </Footer.Link>
        <Footer.Link>
          Become a Cannaray CBD Affiliate
        </Footer.Link>
        <Footer.Link>
          Investors
        </Footer.Link>
        <Footer.Link>
          Terms &amp; Conditions
        </Footer.Link>
        <Footer.Link>
          Privacy &amp; Cookies
        </Footer.Link>
        <Footer.Link>
          Credit
        </Footer.Link>
      </Footer.Links>
      <Footer.Right>
        <Footer.Text>
          Subscribe to our mission
        </Footer.Text>
        <Footer.Input placeholder={"example@email.com"} />
      </Footer.Right>
      <Footer.SocialMedias>
        <Footer.SocialMedia>
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </Footer.SocialMedia>
        <Footer.SocialMedia>
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </Footer.SocialMedia>
        <Footer.SocialMedia>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </Footer.SocialMedia>
      </Footer.SocialMedias>
      <Footer.Logo />
    </Footer>
  )
}
