import React, { useState, useEffect } from 'react'
import { useMediaQuery, MediaQuery } from 'react-responsive'
import { useSpring, useTransition, interpolate, config } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { Container, Title, Text, Link, Inner, Items, Item, Bar, InnerBar, Image, Tags, Tag, Name, Rating, Stars, VolumePrice, Was, Buttons, Button } from './style'

export default function MostPopular({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

MostPopular.Title = function MostPopularTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      {children}
    </Title>
  )
}

MostPopular.Text = function MostPopularText({ children, ...restProps }) {
  return (
    <Text {...restProps}>
      {children}
    </Text>
  )
}

MostPopular.Link = function MostPopularLink({ children, ...restProps }) {
  return (
    <Link {...restProps}>
      {children}
    </Link>
  )
}

MostPopular.Inner = function MostPopularInner({ children, ...restProps }) {
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
  const bind = useDrag(({ last, movement: [mx, ] }) => {
    if (!isExtraSmall) {
      if (last) {
        if (mx >= 0) {
          set({ x: 0 })
        } else if ( mx <= - 140 - innerWidth * 3.235 ) {
          set({ x: - 140 - innerWidth * 3.235 })
        }
      } else {
        set({ x: mx })
        console.log(x.value)
      }
    } else {
      if (last) {
        if (mx >= 0) {
          set({ x: 0 })
        } else if ( mx <= 800 - innerWidth * 10 ) {
          set({ x: 800 - innerWidth * 10 })
        }
      } else {
        set({ x: mx })
        console.log(x.value)
      }
    }
  }, { initial: () => [x.value, 0] })
  const isExtraSmall = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <Inner {...restProps}>
      <Items {...bind()} style={{ transform: x.interpolate((x) => `translate3d(${x}px, 0, 0)`) }} {...restProps}>
        {children}
      </Items>
      <Bar>
        {
          isExtraSmall
          ? <InnerBar style={{ transform: x.interpolate((x) => `translate3d(${(0.3 * innerWidth - 24) * (x / (800 - innerWidth * 10))}px, 0, 0)`) }}/>
          : <InnerBar style={{ transform: x.interpolate((x) => `translate3d(${(0.3 * innerWidth - 24) * (x / (- 140 - innerWidth * 3.125))}px, 0, 0)`) }}/>
        }
      </Bar>
    </Inner>
  )
}

MostPopular.Item = function MostPopularItem({ children, ...restProps }) {
  const [hover, setHover] = useState(false)
  const transitions = useTransition(hover, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })
  const isExtraSmall = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <Item onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...restProps}>
      {children}
      { 
        isExtraSmall ? 
          <MostPopular.Buttons {...restProps}>
            <MostPopular.Button>
              Add +
            </MostPopular.Button>
            <MostPopular.Button>
              View
            </MostPopular.Button>
          </MostPopular.Buttons>
        : transitions.map(({ item, key, props }) => 
          item ?
            <MostPopular.Buttons style={props} {...restProps}>
              <MostPopular.Button>
                Add +
              </MostPopular.Button>
              <MostPopular.Button>
                View
              </MostPopular.Button>
            </MostPopular.Buttons>
          : null
        )
      }
    </Item>
  )
}

MostPopular.Image = function MostPopularImage({ fluid, ...restProps }) {
  return (
    <Image fluid={fluid} {...restProps} />
  )
}

MostPopular.Tags = function MostPopularTags({ children, ...restProps }) {
  return (
    <Tags {...restProps}>
      {children}
    </Tags>
  )
}

MostPopular.Tag = function MostPopularTag({ green = false, children, ...restProps }) {
  const props = green ? {
    color: "#2C9D30",
    border: "1px solid rgba(44,157,48,0.2)"
  } : null

  return (
    <Tag style={props} {...restProps}>
      {children}
    </Tag>
  )
}

MostPopular.Name = function MostPopularName({ children, ...restProps }) {
  return (
    <Name {...restProps}>
      {children}
    </Name>
  )
}

MostPopular.Rating = function MostPopularRating({ rating, children, ...restProps }) {
  return (
    <Rating {...restProps}>
      {rating.split('').map((star, index) => {
        if (star == 1) {
          return <Stars src={'/icons/star1.svg'} {...restProps} />
        } else if (star == 5) {
          return <Stars src={'/icons/star5.svg'} {...restProps} />
        } else if (star == 0) {
          return <Stars src={'/icons/star0.svg'} {...restProps} />
        }
      })}
      {children}
    </Rating>
  )
}

MostPopular.VolumePrice = function MostPopularVolumePrice({ children, ...restProps }) {
  return (
    <VolumePrice {...restProps}>
      {children}
    </VolumePrice>
  )
}

MostPopular.Was = function MostPopularWas({ children, ...restProps }) {
  return (
    <Was {...restProps}>
      {children}
    </Was>
  )
}

MostPopular.Buttons = function MostPopularButtons({ children, ...restProps }) {
  return (
    <Buttons {...restProps}>
      {children}
    </Buttons>
  )
}

MostPopular.Button = function MostPopularButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
    </Button>
  )
}
