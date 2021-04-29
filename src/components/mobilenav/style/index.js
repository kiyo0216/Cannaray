import styled from 'styled-components/macro'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 45px 40px 45px 40px;
  background: rgba(255,255,255,1);
  z-index: 100;
`

export const Links = styled(animated.ul)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0;
  bottom: 160px;
  height: 240px;
`

export const Link = styled(animated.li)`
  font-size: 12px;
  letter-spacing: 0.5px;
  cursor: pointer;
`

export const SocialMedias = styled(animated.div)`
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 50px;
  width: 130px;
`

export const SocialMedia = styled(animated.div)`
  text-align: center;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 100%;
  box-shadow: 0 4px 10px 0 rgba(19,19,19,0.25);
  cursor: pointer;
`

