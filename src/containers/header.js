import React, { useState, useEffect } from 'react'
import { Header } from '../components'
import { useTransition, config } from 'react-spring'
import MediaQuery from 'react-responsive'

export default function HeaderContainer() {
  var prevY
  const [toggle, setToggle] = useState(true)
  const transition = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff
  })

  const handleScroll = (e) => {
    if (prevY > window.scrollY) {
      setToggle(true)
    } else if (prevY < window.scrollY) {
      setToggle(false)
    }
    prevY = window.scrollY
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      prevY = window.scrollY
    }
    document.addEventListener('scroll', handleScroll, true)
    return () => {
      document.removeEventListener('scroll', handleScroll, true)
    }
  })

  return transition.map(({ item, key, props }) => item &&
    <Header style={props}>
      <MediaQuery maxDeviceWidth={999}>
        <Header.Hamburger />
      </MediaQuery>
      <Header.Logo>
        Cannaray
      </Header.Logo>
      <MediaQuery minDeviceWidth={1000}>
        <Header.Menu>
          <Header.DropdownItem>
            <Header.DropdownTitle>
              SHOP
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
              LEARN
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
            OUR STORY
          </Header.Item>
          <Header.Item>
            PRESS
          </Header.Item>
          <Header.Item>
            JOURNAL
          </Header.Item>
        </Header.Menu>
      </MediaQuery>
      <Header.Currency>
        <Header.CurrencyItem>
          GBP
        </Header.CurrencyItem>
        <Header.CurrencyItem>
          USD
        </Header.CurrencyItem>
      </Header.Currency>
      <Header.Number>
        0
      </Header.Number>
    </Header>
  )
}
