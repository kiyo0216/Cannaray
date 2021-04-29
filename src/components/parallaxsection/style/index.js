import styled from 'styled-components/macro'
import Img from 'gatsby-image'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  padding: 140px 215px;
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 1200px) {
    padding: 160px 160px;
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 800px) {
    padding: 160px 40px 130px 40px;
  }
`

export const Inner = styled(animated.div)`
`

export const Subtitle = styled(animated.h2)`
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 0.25px;
  line-height: 1.6;
  margin-bottom: 25px;
  width: 450px;

  @media screen and (max-width: 999px) {
    font-size: 22px;
    width: 260px;
  }
`

export const Text = styled(animated.p)`
  max-width: 350px;
  font-size: 14px;
  letter-spacing: 0.3px;
  line-height: 1.8;
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 45px;
  }
`

export const Link = styled(animated.a)`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.6px;
  padding-bottom 10px;
  border-bottom: 1px solid #a1a1a1;
`

export const InLink = styled(animated.a)`
  border-bottom: 1px solid #000;
`

export const Images = styled(animated.div)`
  width: 100%;
  height: 57vw;
  
  @media screen and (min-width: 1200px) {
     height: 386px;
  }
  
  @media screen and (max-width: 800px) {
    height: 86.8vw;
  }
`

export const Image = styled(animated(Img))`
`
