import React, { useContext, useEffect } from 'react'
import MediaQuery from 'react-responsive'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { Header, MobileNav } from '../components'

library.add(fab)

export default function MobileNavContainer({ ...restProps }) {
  return ( 
    <MobileNav {...restProps}> 
      <Header.Hamburger />
      <Header.Menu>
        <Header.DropdownItem>
          <Header.DropdownTitle>
            Shop
            <Header.DropdownIcon />
          </Header.DropdownTitle>
          <Header.Submenu>
            <Header.Subitem>
              All
            </Header.Subitem>
            <Header.Subitem>
              Most Popular
            </Header.Subitem>
            <Header.Subitem>
              Oils
            </Header.Subitem>
            <Header.Subitem>
              Capsules
            </Header.Subitem>
            <Header.Subitem>
              Topicals
            </Header.Subitem>
            <Header.Subitem>
              Kits
            </Header.Subitem>
            <Header.Subitem>
              New to CBD
            </Header.Subitem>
            <Header.Subitem>
              Sale
            </Header.Subitem>
          </Header.Submenu>
        </Header.DropdownItem>
        <Header.DropdownItem>
          <Header.DropdownTitle>
            Learn
            <Header.DropdownIcon />
          </Header.DropdownTitle>
          <Header.Submenu>
            <Header.Subitem>
              The Gold Standard
            </Header.Subitem>
            <Header.Subitem>
              VESIsorb&reg; Technology
            </Header.Subitem>
            <Header.Subitem>
              CBD 101
            </Header.Subitem>
            <Header.Subitem>
              How To Use CBD
            </Header.Subitem>
            <Header.Subitem>
              The Endocannabinoid System
            </Header.Subitem>
          </Header.Submenu>
        </Header.DropdownItem>
        <Header.Item>
          Our Story
        </Header.Item>
        <Header.Item>
          Press
        </Header.Item>
        <Header.Item>
          Journal
        </Header.Item>
      </Header.Menu>
      <MobileNav.Links>
        <MobileNav.Link>
          Contact
        </MobileNav.Link>
        <MobileNav.Link>
          Locations
        </MobileNav.Link>
        <MobileNav.Link>
          FAQs
        </MobileNav.Link>
        <MobileNav.Link>
          LabReports
        </MobileNav.Link>
        <MobileNav.Link>
          Delivery and Returns
        </MobileNav.Link>
        <MobileNav.Link>
          Become a Cannaray CBD Affiliate
        </MobileNav.Link>
        <MobileNav.Link>
          Investors
        </MobileNav.Link>
        <MobileNav.Link>
          Terms &amp; Conditions
        </MobileNav.Link>
        <MobileNav.Link>
          Privacy &amp; Cookies
        </MobileNav.Link>
      </MobileNav.Links>
      <MobileNav.SocialMedias>
        <MobileNav.SocialMedia>
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </MobileNav.SocialMedia>
        <MobileNav.SocialMedia>
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </MobileNav.SocialMedia>
        <MobileNav.SocialMedia>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </MobileNav.SocialMedia>
      </MobileNav.SocialMedias>
    </MobileNav>
  )
}
