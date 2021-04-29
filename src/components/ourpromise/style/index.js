import styled from 'styled-components/macro'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  position: relative;
  display: grid; 
  background-color: rgb(243, 243, 235);
  margin-top: -3px;
`

export const Background = styled(animated.div)`
  width: 50%;
  grid-area: 1 / 1;
  margin: auto 0 auto auto;

  @media screen and (max-width: 999px) {
    grid-area: 2 / 1;
    width: 100vw;
    margin: 0;
  }
`

export const Foreground = styled(animated.div)`
  diplay: flex;
  flex-direction: column;
  grid-area: 1 / 1;
  padding: 140px 140px 160px 140px;
  z-index: 10;

  @media screen and (max-width: 999px) {
    padding: 100px 40px 160px 40px;
  }
`

export const Inner = styled(animated.div)`
  margin-bottom: 60px;
`

export const Items = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 300px;
  touch-action: none;

  @media screen and (max-width: 999px) {
    flex-direction: row;
    width: 100%;
    user-select: none;
    margin-bottom: 80px;
  }
`

export const Bar = styled(animated.div)`
  height: 2px;
  width: calc(100vw - 80px);
  background-color: #000;
  overflow: hidden;
`

export const InnerBar = styled(animated.div)`
  height: 2px;
  width: calc(70vw - 56px);
  background-color: #fff;
`

export const Item = styled(animated.div)`
  margin-bottom: 45px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 999px) {
    width: 300px;
    margin-right: 60px;
    margin-bottom: 0;
  }
`

export const Title = styled(animated.h2)`
  font-weight: 300;
  font-size: 30px;
  letter-spacing: 0.5px;
  margin-bottom: 65px;

  @media screen and (max-width: 999px) {
    font-size: 21px;
  }
`

export const Subtitle = styled(animated.h3)`
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 16px;
`

 export const Icon = styled(animated.img)`
  width: 16px;
  margin-right: 16px;
`

export const Text = styled(animated.p)`
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 1.75;
`

export const Button = styled(animated.a)`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.6px;
  text-transform: uppercase;


  &:after {
    display: inline-block;
    content: "";
    background-color: #E8E8E1;
    width: 123px;
    height: 2px;
    vertical-align: -100%;
    margin-left: -123px;
  }

  @media screen and (max-width: 999px) {
    font-size: 14px;

    &:after {
      width: 120px;
      margin-left: -120px;
    }
  }
`
