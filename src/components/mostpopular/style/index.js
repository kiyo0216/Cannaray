import styled from 'styled-components/macro'
import { animated } from 'react-spring'
import Img from 'gatsby-image'

export const Container = styled(animated.div)`
  padding: 150px 140px 140px 140px;

  @media screen and (max-width: 999px) {
    padding: 100px 40px 160px 40px;
  }
`

export const Title = styled(animated.h2)`
  font-weight: 300;
  font-size: 30px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;

  @media screen and (max-width: 999px) {
    font-size: 22px;
    margin-bottom: 22px;
  }
`

export const Text = styled(animated.p)`
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 1.75;
  margin-bottom: 15px;

  @media screen and (max-width: 999px) {
    letter-spacing: 0.15px;
    margin-bottom: 30px;
  }
`

export const Link = styled(animated.a)`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.6px;
  text-transform: uppercase;


  &:after {
    display: inline-block;
    content: "";
    background-color: #E8E8E1;
    width: 175px;
    height: 2px;
    vertical-align: -100%;
    margin-left: -175px;
  }

  @media screen and (max-width: 999px) {
    font-size: 14px;

    &:after {
      width: 165px;
      margin-left: -165px;
    }
  }
`

export const Inner = styled(animated.div)`
  user-select: none;
`

export const Items = styled(animated.div)`
  display: flex;
  margin-bottom: 150px;
  user-select: none;
  touch-action: none;
`

export const Item = styled(animated.div)`
  display: flex;
  flex-direction: column;
  flex: 0 0 38.5vw;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex: 0 0 calc(100vw - 80px);
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

export const Image = styled(animated(Img))`
  width: 100%;
  pointer-events: none;
`

export const Tags = styled(animated.div)`
  display: flex;
  margin-bottom: 20px;
`

export const Tag = styled(animated.div)`
  border: 1px solid rgba(19,19,19,.05);
  border-radius: 5px;
  padding: 7px 11px;
  margin: 5px;
  font-size: 12px;
  font-weight: 300;
`

export const Name = styled(animated.h3)`
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 15px;
`

export const Rating = styled(animated.div)`
  font-size: 10px;
  margin-bottom: 15px;
`

export const Stars = styled(animated.img)`
  width: 10px;
  margin-right: 5px;
`

export const VolumePrice = styled(animated.p)`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 10px;
`

export const Was = styled(animated.p)`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  color: #268729;

  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
`

export const Buttons = styled(animated.div)`
  display: flex;
  position: absolute;
  top: 38.5vw;
  background: #fff;

  @media screen and (max-width: 800px) {
    position: relative;
    top: 0;
  }
`

export const Button = styled(animated.button)`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: #fff;
  border: 0;
  border-radius: 5px;
  padding: 12px 38px;
  box-shadow: 0 5px 20px hsla(0,0%,72.2%,.5);
  margin-right: 20px;
  white-space: nowrap;

  &:last-child {
    margin-right: 0px;
  }
`
