import React, { useState, useEffect } from 'react'
import { useSprings, useTransition } from 'react-spring'
import { useMediaQuery } from 'react-responsive'
import { Container, Image, Reviews, Text, Logos, Logo, Link } from './style'

export default function ReviewSection({ children, ...restProps }) {
  return (
    <Container {...restProps} >
      {children}
    </Container>
  )
}

ReviewSection.Image = function ReviewSectionImage({ ...restProps }) {
  return (
    <Image {...restProps} />
  )
}

ReviewSection.Reviews = function ReviewSectionReviews({ data, ...restProps }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(state => (state + 1) % data.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  const transitions = useTransition(index, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave:  { opacity: 0 },
  })
  const springs = useSprings(data.length, data.map((item, i) => ({
    opacity: i === index ? 1 : 0.3
  })))
  const isExtraSmall = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <Reviews {...restProps} >
      {
        transitions.map(({ item, key, props }) => (
          <Text style={props}>{data[item].text}</Text>
        ))
      }
      <Logos>
        { 
          !isExtraSmall && springs.map((prop, i) => (
            <Logo key={i} fluid={data[i].logo} imgStyle={{ objectFit: "contain" }} style={prop} /> 
          ))
        }
        {
          isExtraSmall && transitions.map(({ item, key, props }) => (
            <Logo key={key} fluid={data[item].logo} style={props} imgStyle={{ objectFit: "contain" }} />
          ))
        }
      </Logos>
    </Reviews>
  )
}

ReviewSection.Link = function ReviewSectionLink({ children, ...restProps }) {
  return (
    <Link {...restProps} >
      {children}
    </Link>
  )
}
