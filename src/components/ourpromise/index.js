import React, { useState, useEffect } from 'react'
import { MediaQuery, useMediaQuery } from 'react-responsive'
import { useSpring, interpolate, config } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { Container, Background, Foreground, Inner, Items, Bar, InnerBar, Item, Title, Icon, Subtitle, Text, Button } from './style'

export default function OurPromise({ children, ...restProps }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

OurPromise.Background = function OurPromiseBackground({ children, ...restProps }) {
  return (
    <Background {...restProps}>
      {children}
    </Background>
  )
}

OurPromise.Icon = function OurPromiseIcon({ ...restProps }) {
  return (
    <Icon {...restProps} />
  )
}

OurPromise.Foreground = function OurPromiseForeground({ children, ...restProps }) {
  return (
    <Foreground>
      {children}
    </Foreground>
  )
}

OurPromise.Inner = function OurPromiseInner({ children, ...restProps }) {
  var innerWidth
  useEffect(() => {
    if (typeof window !== 'undefined') {
      innerWidth = window.innerWidth
    }
  }, [])
  const [{ x }, set] = useSpring(() => ({
    x: 0,
    config: config.stiff
  }))
  const bind = useDrag(({ last, movement: [mx, ] }) => {
    if (isSmall) {
      if (last) {
        if (mx >= 0) {
          set({ x: 0 })
        } else if ( mx <= innerWidth - 1170 ) {
          set({ x: innerWidth - 1170 })
        }
      } else {
        set({ x: mx })
      }
    }
  }, { initial: () => [x.value, 0] })

  const isSmall = useMediaQuery({ query: '(max-width: 999px)' })
  if (!isSmall) { 
    set({ x: 0 })
  }
  return (
    <Inner {...restProps}>
      <Items {...bind()} style={{ transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`) }} {...restProps}>
        {children}
      </Items>
      {isSmall &&
        <Bar>
          <InnerBar style={{ transform: x.interpolate((x) => `translate3d(${(0.3 * innerWidth - 24) * (x / (innerWidth - 1170))}px, 0, 0)`) }}/>
        </Bar>
      }
    </Inner>
  )
}

OurPromise.Item = function OurPromiseItem({ children, ...restProps }) {
  return (
    <Item {...restProps}>
      {children}
    </Item>
  )
}

OurPromise.Title = function OurPromiseTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  )
}

OurPromise.Subtitle = function OurPromiseSubtitle({ children, ...restProps }) {
  return (
    <Subtitle {...restProps}>
      {children}
    </Subtitle>
  )
}

OurPromise.Text = function OurPromiseText({ children, ...restProps }) {
  return (
    <Text {...restProps}>
      {children}
    </Text>
  )
}

OurPromise.Button = function OurPromiseButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
    </Button>
  )
}
