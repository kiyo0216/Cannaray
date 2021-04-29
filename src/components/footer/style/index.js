import styled, { keyframes } from 'styled-components/macro'
import { animated } from 'react-spring'
import Img from 'gatsby-image'

export const Container = styled(animated.div)`
  position: relative;
  padding: 155px 70px 100px 70px;

  @media screen and (max-width: 800px) {
    padding: 100px 40px 50px 40px;
  } 
`

export const Links = styled(animated.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 155px;

  @media screen and (max-width: 800px) {
    margin-bottom: 90px;
  } 
`

export const Link = styled(animated.a)`
  font-size: 15px;
  letter-spacing: 0.7px;
  cursor: pointer;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`

export const SocialMedias = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  bottom: 50px;
  width: 145px;
`

export const SocialMedia = styled(animated.div)`
  text-align: center;
  vertical-align: middle;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 100%;
  box-shadow: 0 4px 10px 0 rgba(19,19,19,0.25);
  cursor: pointer;
`

export const Right = styled(animated.div)`
  position: absolute;
  top: 0;
  right: 0;
  padding-top: inherit;
  padding-right: inherit;

  @media screen and (max-width: 800px) {
    padding: 0;
    position: relative;
    margin-bottom: 70px;
  }
`

export const Text = styled(animated.p)`
  color: rgba(0,0,0,0.2);
  width: 270px;
  margin-bottom: 30px;
  font-size: 17px;
  letter-spacing: 0.3px;

  @media screen and (max-width: 800px) {
    font-size: 19px;
    margin-bottom: 15px;
  }
`

export const Input = styled(animated.input)`
  width: 270px;
  padding: 15px 0;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.1);

  :focus {
    outline: none;
  }
  
  ::placeholder {
    color: #B8B8B8;
    font-size: 16px;
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const Submit = styled(animated.button)` 
  color: rgba(0,0,0,0.2);
  border: none;
  background: none;
  margin-left: -80px;

  @media screen and (max-width: 800px) {
    position: absolute;
    bottom: 15px;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Logo = styled.svg`
  width: 89px;
  height: 89px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 70px;
  margin-bottom: 100px;

  & > path {
    transform-origin: center;
    animation: ${rotate} 20s linear infinite;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`
