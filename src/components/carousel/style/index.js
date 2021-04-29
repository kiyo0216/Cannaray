import styled, { keyframes } from 'styled-components/macro'
import { animated } from 'react-spring'
import Img from 'gatsby-image'

export const Container = styled(animated.div)`
	display: grid;
`

export const Image = styled(animated(Img))`
	grid-area: 1 / 1;
  min-height: 680px;
	height: 97vh;
`

export const Button = styled(animated.div)`
	height: 3px;
	width: 60px;	
	background: rgba(0,0,0,0.1);
	cursor: pointer;
`

const buttonAnimation = keyframes`
	from {
		width: 0px;
	}

	to {
		width: 60px;
	}
`

export const AnimatedButton = styled(animated.div)`
	height: 3px;
	width: 0px;	
	background: rgba(0,0,0,0.3);
	cursor: pointer;

	animation: ${buttonAnimation} 10s linear;
`

export const ButtonContainer = styled(animated.div)`
  position: relative;
	grid-area: 2 / 1;
  bottom: 40px;
  left: 140px;
	display: flex;
	justify-content: space-between;
	width: 220px;
`

export const Inner = styled(animated.div)`
  grid-area: 1 / 1;
  z-index: 10;
  position: absolute;
  left: 140px;
  align-self: center;

  @media screen and (max-width: 999px) {
    left: 40px;
  }
`

export const Slide = styled(animated.div)`
  position: relative;
  grid-area: 1 / 1;
  display: grid;
`

export const Heading = styled(animated.h1)`
  white-space: pre-wrap;
  font-weight: 300;
  font-size: calc(26px + 2vw);
  line-height: calc(52px + 2vw);
  letter-spacing: 0.1vw;
`

export const LinkButton = styled(animated.button)`
  padding: 20px 26px;
  min-width: 160px;
  border: 0;
  border-radius: 5px;
  background: #ECCC71;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
`
