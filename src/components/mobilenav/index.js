import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { Container, Links, Link, SocialMedias, SocialMedia } from './style'

export default function MobileNav({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

MobileNav.Links = function MobileNavLinks({ children, ...restProps }) {
  return (
    <Links {...restProps}>
      {children}
    </Links>
  )
}

MobileNav.Link = function MobileNavLink({ children, ...restProps }) {
  return (
    <Link {...restProps}>
      {children}
    </Link>
  )
}

MobileNav.SocialMedias = function MobileNavSocialMedias({ children, ...restProps }) {
  return (
    <SocialMedias {...restProps}>
      {children}
    </SocialMedias>
  )
}

MobileNav.SocialMedia = function MobileNavSocialMedia({ children, ...restProps }) {
  const [toggle, setToggle] = useState(false)
  const props = useSpring({ background: toggle ? '#eccc71' : '#ffffff' })

  return (
    <SocialMedia onMouseEnter={() => {setToggle(true)}} onMouseLeave={() => {setToggle(false)}} style={props} {...restProps}>
      {children}
    </SocialMedia>
  )
}
