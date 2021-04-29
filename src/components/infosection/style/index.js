import styled from 'styled-components/macro'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  background-image: url("backgrounds/Info-Section-Background.webp");
  background-position: center;
  background-size: auto 100%;
  padding: 320px 140px 120px; 140px;

  @media screen and (max-width: 999px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`

export const Subtitle = styled(animated.h2)`
  color: #fff;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 0.25px;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 450px;

  @media screen and (max-width: 999px) {
    font-size: 22px;
    max-width: 260px;
  }
`

export const Button = styled(animated.button)`
  padding: 20px 26px;
  min-width: 160px;
  border: 0;
  border-radius: 5px;
  background: #ECCC71;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 200px;

  @media screen and (max-width: 999px) {
    min-width: 100px;
    padding: 20px 20px;
    margin-bottom: 210px;
  }
`

export const Inner = styled(animated.div)`
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

export const Items = styled(animated.div)`
  display: flex;
  margin-bottom: 100px;
  user-select: none;
  user-drag: none;
  touch-action: none;

  @media screen and (max-width: 800px) {
    margin-bottom: 70px;
  }
`

export const Item = styled(animated.div)`
  flex: 0 0 385px;
  color: #fff;

  @media screen and (max-width: 800px) {
    flex: 0 0 calc(100% + 40px);
  }
`

export const ItemTitle = styled(animated.h3)`
  font-size: 17px;
  margin-bottom: 30px;
`

export const ItemText = styled(animated.p)`
  width: 250px;
  font-size: 14px;
  letter-spacing: 0.3px;
  line-height: 1.8;
  margin-bottom: 20px;
`

export const ItemLink = styled(animated.a)`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.6px;
  padding-bottom 10px;
  border-bottom: 1px solid #a1a1a1;
`
