import React from 'react'
import { ParallaxSection } from '../components'

export default function ParallaxSectionContainer() {
  return (
    <ParallaxSection>
      <ParallaxSection.Subtitle>
        Cannaray is the Gold <br />Standard in CBD
      </ParallaxSection.Subtitle>
      <ParallaxSection.Text>
        At Cannaray, we&apos;re on a mission to help people lead healthier, happier lives through the power of CBD - starting with the highest quality plant extracts.
      </ParallaxSection.Text>
      <ParallaxSection.Text>
        Our premium blends are designed to fit into your day-to-day life easily, whether, you&apos;re taking the <ParallaxSection.InLink>CBD oils</ParallaxSection.InLink> or the <ParallaxSection.InLink>Capsules</ParallaxSection.InLink>.
      </ParallaxSection.Text>
      <ParallaxSection.Text>
        Because self-care should be simple.
      </ParallaxSection.Text>
      <ParallaxSection.Link>
        Our Story
      </ParallaxSection.Link>
    </ParallaxSection>
  )
}
