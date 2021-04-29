import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSpring, interpolate, config } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { Container, Subtitle, Button, Inner, Bar, InnerBar, Items, Item, ItemTitle, ItemText, ItemLink } from './style'

export default function InfoSection({ children, ...restProps }) {
  return (
    <Container {...restProps} >
      {children}
    </Container>
  )
}

InfoSection.Subtitle = function InfoSectionSubtitle({ children, ...restProps }) {
  return (
    <Subtitle {...restProps} >
      {children}
    </Subtitle>
  )
}

InfoSection.Button = function InfoSectionButton({ children, ...restProps }) {
  return (
    <Button {...restProps} >
      {children}
    </Button>
  )
}

InfoSection.Inner = function InfoSectionInner({ children, ...restProps }) {
  var innerWidth
  const [{ x }, set] = useSpring(() => ({
    x: 0,
    config: config.stiff
  }))
  useEffect(() => {
    if (typeof window !== 'undefined') {
      innerWidth = window.innerWidth
    }
  }, [])
  const bind = useDrag(({ last, movement: [mx, ]}) => {
    if (!isSmall) {
      if (last) {
        if (mx >= 0) {
          set({ x: 0 })
        } else if ( mx <= innerWidth - 1295 ) {
          set({ x: innerWidth - 1295 })
        }
      } else {
        set({ x: mx })
        console.log(x.value)
      }
    } else if (!isExtraSmall) {
      if (last) {
        if (mx >= 0) {
          set({ x: 0 })
        } else if ( mx <= innerWidth - 1195 ) {
          set({ x: innerWidth - 1195 })
        }
      } else {
        set({ x: mx })
        console.log(x.value)
      }
    } else {
      if (last) {
        if (mx >= 0) {
          set({ x: 0 })
        } else if ( mx <= - 2 * innerWidth + 120 ) {
          set({ x: - 2 * innerWidth + 120 })
        }
      } else {
        set({ x: mx })
        console.log(x.value)
      }
    }
  }, { initial: () => [x.value, 0] })
  const isExtraSmall = useMediaQuery({ query: '(max-width: 800px)' })
  const isSmall = useMediaQuery({ query: '(max-width: 999px)' })

  return (
    <Inner {...restProps} >
      <Items {...bind()} style={{ transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`) }} {...restProps}>
        {children}
      </Items>
      <Bar>
        {
          !isSmall && !isExtraSmall && <InnerBar style={{ transform: x.interpolate((x) => `translate3d(${(0.3 * innerWidth - 24) * (x / (innerWidth - 1295))}px, 0, 0)`) }} />
        }
        {
          isSmall && !isExtraSmall && <InnerBar style={{ transform: x.interpolate((x) => `translate3d(${(0.3 * innerWidth - 24) * (x / (innerWidth - 1195))}px, 0, 0)`) }} />
        }
        {
          isExtraSmall && <InnerBar style={{ transform: x.interpolate((x) => `translate3d(${(0.3 * innerWidth - 24) * (x / (- 2 * innerWidth + 120))}px, 0, 0)`) }} />
        }
      </Bar>
    </Inner>
  )
}

InfoSection.Item = function InfoSectionItem({ children, ...restProps }) {
  return (
    <Item {...restProps} >
      {children}
    </Item>
  )
}

InfoSection.ItemTitle = function InfoSectionItemTitle({ children, ...restProps }) {
  return (
    <ItemTitle {...restProps} >
      {children}
    </ItemTitle>
  )
}

InfoSection.ItemText = function InfoSectionItemText({ children, ...restProps }) {
  return (
    <ItemText {...restProps} >
      {children}
    </ItemText>
  )
}

InfoSection.ItemLink = function InfoSectionItemLink({ children, ...restProps }) {
  return (
    <ItemLink {...restProps} >
      {children}
    </ItemLink>
  )
}
