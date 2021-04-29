import styled from 'styled-components/macro'
import { animated } from 'react-spring'

export const Container = styled(animated.div)`
  display: flex;
  align-items: center;
  position: fixed;
  top: 80px;
  left: 70px;
  right: 70px;
	z-index: 50;

  @media screen and (max-width: 999px) {
    top: 40px;
    left: 40px;
    right: 40px;
  }
`

export const Hamburger = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  height: 20px;
  width: 25px;
`

export const Line = styled(animated.div)`
  background-color: #000;
  height: 2px;
  width: 25px;

  &:first-child{
    margin-bottom: 6px;
  }
`

export const Logo = styled(animated.h2)`
  font-size: 34px;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media screen and (max-width: 999px) {
    font-size: 20px;
  }
`

export const Menu = styled(animated.ul)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  margin-left: 60px;
  
  @media screen and (max-width: 999px) {
    flex-direction: column;
    align-items: flex-start;
    height: 250px;
    margin-top: 60px;
    margin-left: 0;
    padding-left: 0;
  }
`

export const Item = styled(animated.li)`
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: 999px) {
    font-size: 24px; 
    text-transform: none;
  }
`

export const DropdownItem = styled(animated.li)`
  text-transform: uppercase;
`

export const DropdownTitle = styled(animated.p)`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: 999px) {
    font-size: 24px; 
    text-transform: none;
  }
`

export const DropdownIcon = styled(animated.span)`
  display: inline-block;
  margin-left: 8px;
  font-size: 10px;
  cursor: pointer;

  @media screen and (max-width: 999px) {
    font-size: 8px; 
  }
`

export const Submenu = styled(animated.ul)`
  position: absolute;
  margin-left: -20px;
  margin-top: 20px;
  padding: 20px;
  min-width: 222px;
  background: rgba(255,255,255,1);
  border-radius: 4px;
  box-shadow: -1px 2px 10px 0 rgba(19,19,19,.12);
  text-transform: none;
  font-size: 15px;
  z-index: 10;

  @media screen and (max-width: 999px) {
    margin-left: 0;

  }
`

export const Subitem = styled(animated.li)`
  margin-bottom: 25px;
  cursor: pointer;
  
  &:last-child {
    margin-bottom: 0;
  }
`

export const Currency = styled(animated.select)`
  position: absolute;
  right: 50px; 
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  appearance: none;
  padding-bottom: 5px;
  border: 0;
  border-bottom: 1px solid rgba(0,0,0,0.3);
	background: rgba(0,0,0,0);
`

export const CurrencyItem = styled(animated.option)`
`

export const Number = styled(animated.div)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: rgba(0,0,0,0.3);
  border-radius: 100%;
`
