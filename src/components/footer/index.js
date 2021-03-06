import React, { useState, useEffect } from 'react'
import { useSpring } from 'react-spring'
import { Container, Links, Link, SocialMedias, SocialMedia, Right, Text, Input, Submit, Logo } from './style'

export default function Footer({ children, ...restProps }) {
  return (
    <Container {...restProps} >
      {children}
    </Container>
  )
}

Footer.Links = function FooterLinks({ children, ...restProps }) {
  return (
    <Links {...restProps}>
      {children}
    </Links>
  )
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return (
    <Link {...restProps}>
      {children}
    </Link>
  )
}

Footer.SocialMedias = function FooterSocialMedias({ children, ...restProps }) {
  return (
    <SocialMedias {...restProps}>
      {children}
    </SocialMedias>
  )
}

Footer.SocialMedia = function FooterSocialMedia({ children, ...restProps }) {
  const [toggle, setToggle] = useState(false)
  const props = useSpring({ background: toggle ? '#eccc71' : '#ffffff' })

  return (
    <SocialMedia onMouseEnter={() => {setToggle(true)}} onMouseLeave={() => {setToggle(false)}} style={props} {...restProps}>
      {children}
    </SocialMedia>
  )
}

Footer.Right = function FooterRight({ children, ...restProps }) {
  return (
    <Right {...restProps} >
      {children}
    </Right>
  )
}

Footer.Text = function FooterText({ children, ...restProps }) {
  return (
    <Text {...restProps} >
      {children}
    </Text>
  )
}

Footer.Input = function FooterInput({ ...restProps }) {
  const [hover, setHover] = useState(false);
  const [value, setValue] = useState("")
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (value == "") {
      setToggle(false)
    } else {
      setToggle(true)
    }
  })
  const props = useSpring({ color: hover ? "#000" : "rgba(0,0,0,0.2)" })
  return (
    <>
      <Input value={value} onChange={e => setValue(e.target.value)} {...restProps} />
      { toggle && <Submit onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={props} >Subscribe</Submit> }
    </>
  )
}

Footer.Logo = function FooterLogo({ ...restProps }) {
  return (
    <Logo {...restProps}>
      <path d="M45.788 1c2.885 0 4.743 1.568 5.182 4.22h-2.553c-.358-1.338-1.253-1.795-2.63-1.795-1.973 0-3.425 1.35-3.425 3.576 0 2.208 1.503 3.597 3.442 3.597 1.476 0 2.255-.479 2.642-1.864H51c-.47 2.7-2.36 4.266-5.246 4.266C42.074 13 40 10.423 40 7c0-3.405 2.222-6 5.788-6zm24.52 17.803l2.887 2.888 1.687-4.573-4.574 1.685zm1.978 5.376l-4.466-4.465-1.952.714L64 18.56 76.423 14 78 15.577 73.437 28l-1.868-1.87.717-1.951zM90 51H78l.002-2.096 7.885-6.497-7.885-.001V40L90 40.002v2.096l-7.884 6.496H90V51zM73.358 81L65 72.641l1.458-1.458 10.006.98-5.493-5.493L72.64 65 81 73.359l-1.456 1.457-10.006-.981 5.491 5.494L73.358 81zM47.454 82.242h-4.209l2.106 4.448 2.103-4.448zm-5.357-2.414l6.505.001.903-1.896h2.722L46.5 90h-2.3l-5.727-12.067h2.724l.9 1.895zM15.836 75.735l1.87 1.898 2.204-2.235-1.871-1.899c-.687-.697-1.611-.6-2.203 0-.603.612-.687 1.538 0 2.236zM26 72.587L17.707 81l-3.53-3.583c-1.588-1.61-1.551-4.027 0-5.6 1.207-1.226 2.914-1.515 4.348-.83L19.509 66l2.024 2.056-.995 4.613 1.03 1.047 2.772-2.813L26 72.587zM8.758 48.06v-4.207L4.31 45.957l4.448 2.103zm2.414-5.356l-.001 6.507 1.896.902v2.721L1 47.106v-2.298l12.067-5.729v2.724l-1.895.901zM19.15 20.893L10 18.853l2.102-2.101 6.066 1.417-1.417-6.067L18.853 10l2.038 9.151L24 22.261 22.259 24l-3.109-3.107z"></path>
    </Logo>
  )
}
