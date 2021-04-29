import styled from 'styled-components/macro'
import { animated } from 'react-spring'
import Img from 'gatsby-image'

export const Container = styled(animated.div)`
  background-color: #F3F3EB;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 80px;

  @media screen and (max-width: 800px) {
    padding-top: 60px;
  }
`

export const Image = styled(animated(Img))`
  width: 150px;
  margin-bottom: 100px;
`

export const Reviews = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 200px;

  @media screen and (max-width: 800px) {
    margin-bottom: 120px;
  }
`

export const Text = styled(animated.p)`
  text-align: center;
  width: 55%;
  font-size: 32px;
  line-height: 1.5;
  margin-bottom: 20px;
  font-weight: 300;

  @media screen and (max-width: 800px) {
    width: 70%;
    font-size: 22px;
  }
`

export const Logos = styled(animated.div)`
  margin-top: 120px;
  display: flex;
  width: 55%;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    margin-top: 90px;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    margin-top: 120px;
    justify-content: center;
  }
`

export const Logo = styled(animated(Img))`
  width: 25%;
`

export const Link = styled(animated.a)`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.6px;
  padding-bottom 10px;
  border-bottom: 1px solid #a1a1a1;
`
