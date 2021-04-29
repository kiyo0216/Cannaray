import styled from 'styled-components/macro'
import { animated } from 'react-spring'
import Img from 'gatsby-image'

export const Container = styled(animated.div)`
  user-select: none;
  user-drag: none;
  position: absolute;
  display: flex;
  top: calc(100vh - 120px);
  left: 50vw;
  z-index: 30;
  touch-action: none;

  @media screen and (max-height: 695px) {
    top: 580px;
  }
`

export const Item = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  padding: 0 10px 0 20px;
  box-shadow: 0 0 11px 0 rgba(0,0,0,0.2);
  background-color: #FFF;
  border-radius: 4px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`

export const Text = styled(animated.p)`
  font-size: 14px;
`

export const Image = styled(Img)`
  height: 57px;
  width: 45px;
`
