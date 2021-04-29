import React, { useState, useContext, createContext } from 'react'
import { Container, Item, Text, Image } from './style'
import { useSpring, interpolate, config } from 'react-spring'
import { useDrag } from 'react-use-gesture'

const SliderContext = createContext()

export default function Slider({ children, ...restProps }) {
  const [index, setIndex] = useState(0)
  const [{ x }, set] = useSpring(() => ({
    x: 0
  }))
  const bind = useDrag(({ last, movement: [mx, ] }) => {
    if (last) {
      if (mx >= 0) {
        set({ x: 0 })
      } else if ( mx <= -1075 ) {
        set({ x: -1075 })
      } 
      console.log('stopped: ', mx)
    } else {
      set({ x: mx })
      console.log('moving: ', mx)
    }
  }, { initial: () => [x.value, 0] } )
  return (
    <Container {...bind()} style={{ transform: x.interpolate((x) => `translate3d(${x}px, 0, 0`) }} {...restProps} >
      <SliderContext.Provider value={{ index, setIndex }}>
        {children}
      </SliderContext.Provider>
    </Container>
  )
}

Slider.Item = function SliderItem({ i, children, ...restProps }) {
  const { index, setIndex } = useContext(SliderContext)
  const props = useSpring({ opacity: (index === 0 || index === i) ? 1 : 0.3, config: config.slow })

  return (
    <Item onMouseEnter={() => setIndex(i)} onMouseLeave={() => setIndex(0)} style={props} {...restProps} >
      { children }
    </Item>
  )
}

Slider.Text = function SliderText({ children, ...restProps }) {
  return (
    <Text {...restProps} >
      { children }
    </Text>
  )
}

Slider.Image = function SliderImage({ fluid, ...restProps }) {
  return (
    <Image fluid={fluid} draggable={false} {...restProps} />
  )
}
