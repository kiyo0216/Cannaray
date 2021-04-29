import React, { useState, createContext, useContext, useRef, useEffect } from 'react'
import { useTransition, useSpring } from 'react-spring'
import { Container, Hamburger, Line, Logo, Menu, Item, DropdownItem, DropdownTitle, DropdownIcon, Submenu, Subitem, Currency, CurrencyItem, Number } from './style'
import { MobileNavContext } from '../../pages'

const ToggleContext = createContext()

export default function Header({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container> 
  )
}

Header.Hamburger = function HeaderHamburger({ ...restProps }) {
  const [toggle, setToggle] = useState(false)
  const { mobileNav, setMobileNav } = useContext(MobileNavContext)

  const handleClick = () => {
    setMobileNav(mobileNav => !mobileNav)
    console.log(mobileNav)
  }

  const handleEnter = () => {
    setToggle(true)
  }

  const handleLeave = () => {
    setToggle(false)
  }

  const props = useSpring({
    marginBottom: toggle ? -2 : 6,
    delay: 100
  })

  return (
    <Hamburger onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Line style={props} />
      <Line />
    </Hamburger>
  )
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return (
    <Logo {...restProps}>
      {children} 
    </Logo>
  )
}

Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return (
    <Menu {...restProps}>
      {children} 
    </Menu>
  )
}

Header.Item = function HeaderItem({ children, ...restProps }) {
  return (
    <Item {...restProps}>
      {children} 
    </Item>
  )
}

Header.DropdownItem = function HeaderDropdownItem({ children, ...restProps }) {
  const [toggle, setToggle] = useState(false)
  const ref = useRef(null)

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setToggle(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <DropdownItem ref={ref} {...restProps}>
        {children} 
      </DropdownItem>
    </ToggleContext.Provider>
  )
}

Header.DropdownTitle = function HeaderDropdownTitle({ children, ...restProps }) {
  const { toggle, setToggle } = useContext(ToggleContext)

  return (
    <DropdownTitle onClick={() => setToggle(toggle => !toggle)} {...restProps}>
      {children}
    </DropdownTitle>
  )
}

Header.DropdownIcon = function HeaderDropdownIcon({  ...restProps }) {
  const { toggle } = useContext(ToggleContext)
  const props = useSpring({ transform: toggle ? 'rotate(180deg)' : 'rotate(360deg)' }) 
  return (
    <DropdownIcon style={props} {...restProps}>
      &#9660;
    </DropdownIcon>
  )
}

Header.Submenu = function HeaderSubmenu({ children, ...restProps }) {
  const { toggle } = useContext(ToggleContext)
  const transition = useTransition(toggle, null, {
    from: { transform: 'translateY(40px)', opacity: 0 },
    enter: { transform: 'translateY(0px)', opacity: 1 },
    leave: { transform: 'translateY(40px)', opacity: 0 }
  })

  return transition.map(({ item, key, props }) => item &&
    <Submenu style={props} {...restProps}>
      {children}
    </Submenu>
  )
}

Header.Subitem = function HeaderSubitem({ children, ...restProps }) {
  return (
    <Subitem {...restProps}>
      {children} 
    </Subitem>
  )
}

Header.Currency = function HeaderCurrency({ children, ...restProps }) {
  return (
    <Currency {...restProps}>
      {children} 
    </Currency>
  )
}

Header.CurrencyItem = function HeaderCurrencyItem({ children, ...restProps }) {
  return (
    <CurrencyItem {...restProps}>
      {children} 
    </CurrencyItem>
  )
}

Header.Number = function HeaderNumber({ children, ...restProps }) {
  return (
    <Number {...restProps}>
      {children} 
    </Number>
  )
}
