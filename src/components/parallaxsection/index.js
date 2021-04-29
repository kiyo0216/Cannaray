import React, { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Inner, Subtitle, Text, Link, InLink, Images, Image } from './style'

export default function ParallaxSection({ children, ...restProps }) {
  return (
    <Container>
      <ParallaxSection.Parallax />
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

ParallaxSection.Subtitle = function ParallaxSectionSubtitle({ children, ...restProps }) {
  return (
    <Subtitle>
      {children}
    </Subtitle>
  )
}

ParallaxSection.Text = function ParallaxSectionText({ children, ...restProps }) {
  return (
    <Text>
      {children}
    </Text>
  )
}

ParallaxSection.InLink = function ParallaxSectionInLink({ children, ...restProps }) {
  return (
    <InLink>
      {children}
    </InLink>
  )
}

ParallaxSection.Link = function ParallaxSectionLink({ children, ...restProps }) {
  return (
    <Link>
      {children}
    </Link>
  )
}

ParallaxSection.Parallax = function ParallaxSectionParallax({ ...restProps }) {
  const ref = useRef()
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

  const data = useStaticQuery(graphql`
    query {
      product: file(relativePath: { eq: "parallax/Product.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      person: file(relativePath: { eq: "parallax/Person.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  })

  const calcPerson = o => `translateY(${o * - 0.02}px)`
  const calcProduct = o => `translateY(${o * 0.02}px)`

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    set({ offset })
  }

  return (
    <Images ref={ref} style={{ position: 'relative' }}>
      <Image fluid={data.person.childImageSharp.fluid} style={{ position: 'absolute', left: '30%', width: '68%', transform: offset.interpolate(calcPerson) }} />
      <Image fluid={data.product.childImageSharp.fluid} style={{ position: 'absolute', bottom: '50%', width: '50%', transform: offset.interpolate(calcProduct) }} />
    </Images>
  )
}
