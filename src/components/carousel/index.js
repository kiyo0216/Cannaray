import React, { useState, useEffect, createContext, useContext } from 'react'
import { useSpring, useTransition, config } from 'react-spring'
import MediaQuery from 'react-responsive'
import { Container, Image, Button, AnimatedButton, ButtonContainer, Slide, Inner, Heading, LinkButton } from './style'

const CarouselContext = createContext()

export default function Carousel({ slides, ...restProps }) {
	const [index, set] = useState(0)
	const transitions = useTransition(slides[index], item => slides.indexOf(item), {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses
	})
	useEffect(() => {
		const interval = setInterval(() => {
			set(state => (state + 1) % slides.length)
		}, 10000)
		return () => clearInterval(interval)
	}, [])

  return (
		<CarouselContext.Provider value={{ index, set }}>
			<Container {...restProps}>
				{transitions.map(({ item, props, key }) => (
          <Slide key={key} style={props}>
            <Image fluid={item.image} draggable={false} />
            <Carousel.Inner heading={item.heading} link={item.link} />
          </Slide>
        ))}
				<MediaQuery minDeviceWidth={1000}>
					<ButtonContainer>
						<Carousel.Button i={0} />
						<Carousel.Button i={1} />
						<Carousel.Button i={2} />
					</ButtonContainer>
				</MediaQuery>
			</Container>
		</CarouselContext.Provider>
  )
}

Carousel.Button = function CarouselButton({ i, ...restProps }) {
	const { index, set } = useContext(CarouselContext)
	const handleClick = (i) => {
		set(i)
	}
	
	return (
		<Button onClick={() => handleClick(i)}>
			{index === i ? <AnimatedButton /> : null}
		</Button>
	)
}

Carousel.Slide = function CarouselSlide({ i, children, ...restProps }) {
  return (
    <Slide {...restProps}>
      {children}
    </Slide>
  )
}

Carousel.Inner = function CarouselInner({ heading, link, ...restProps }) {
  return (
    <Inner {...restProps} >
      <Carousel.Heading heading={heading} {...restProps} />
      <Carousel.LinkButton link={link} {...restProps} />
    </Inner>
  )
}

Carousel.Heading = function CarouselHeading({ heading, ...restProps }) {
  return (
    <Heading {...restProps} >
      {heading}
    </Heading>
   )
}

Carousel.LinkButton = function CarouselLinkButton({ link, ...restProps }) {
  const [toggle, setToggle] = useState(false)
  const props = useSpring({ backgroundColor: toggle ? '#FFF' : '#ECCC71' })

  return (
    <LinkButton style={props} {...restProps} onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} >
      {link}
    </LinkButton>
  )
}
