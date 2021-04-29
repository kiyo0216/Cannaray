import React, { useState, createContext } from "react"
import { useTransition, config } from 'react-spring'
import { Link } from "gatsby"

import "normalize.css"

import SEO from "../components/seo"
import GlobalStyle from "../styles/global"
import HeaderContainer from '../containers/header'
import MobileNavContainer from '../containers/mobilenav'
import CarouselContainer from '../containers/carousel'
import SliderContainer from '../containers/slider'
import OurPromiseContainer from '../containers/ourpromise'
import MostPopularContainer from '../containers/mostpopular'
import InfoSectionContainer from '../containers/infosection'
import ParallaxSectionContainer from '../containers/parallaxsection'
import ReviewSectionContainer from '../containers/reviewsection'
import FooterContainer from '../containers/footer'

export const MobileNavContext = createContext()

export default function IndexPage() {
  const [mobileNav, setMobileNav] = useState(false)
  
  const transition = useTransition(mobileNav, null, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0 },
    config: config.slo
  })

  return (
    <>
      <SEO title="Home" />
      <GlobalStyle />
      <MobileNavContext.Provider value={{ mobileNav, setMobileNav }}>
        {transition.map(({ item, key, props }) => item && <MobileNavContainer style={props}/>)}
        <HeaderContainer />
      </MobileNavContext.Provider>
      <CarouselContainer />
      <SliderContainer />
      <OurPromiseContainer />
      <MostPopularContainer />
      <InfoSectionContainer />
      <ParallaxSectionContainer />
      <ReviewSectionContainer />
      <FooterContainer />
    </>
  )
}
