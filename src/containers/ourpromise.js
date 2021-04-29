import React from 'react'
import { OurPromise } from '../components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function OurPromiseContainer() {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "Our-Promise.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <OurPromise>
      <OurPromise.Background>
        <Img fluid={data.background.childImageSharp.fluid} />
      </OurPromise.Background>
      <OurPromise.Foreground>
        <OurPromise.Title>Our Promise</OurPromise.Title>
        <OurPromise.Inner>
          <OurPromise.Item>
            <OurPromise.Subtitle><OurPromise.Icon src={'/icons/x.svg'} />Chemical-Free</OurPromise.Subtitle>
            <OurPromise.Text>Unlike other CBD brands, we extract the plant using a cutting-edge chemical-free process. This gives you the highest-quality, most potent products with zero toxins.</OurPromise.Text>
          </OurPromise.Item>
          <OurPromise.Item>
            <OurPromise.Subtitle><OurPromise.Icon src={'/icons/peace.svg'} />Eco Friendly</OurPromise.Subtitle>
            <OurPromise.Text>The best CBD is good for you and the planet. Every Cannaray product that arrives at your door comes with the promise of limiting carbon emissions and using minimal packaging.</OurPromise.Text>
          </OurPromise.Item>
          <OurPromise.Item>
            <OurPromise.Subtitle><OurPromise.Icon src={'/icons/wave.svg'} />Easy to Use</OurPromise.Subtitle>
            <OurPromise.Text>Our mission is to demystify CBD and make it the most effortless part of your day. Every CBD essential is designed to fit seamlessly into your routine.</OurPromise.Text>
          </OurPromise.Item>
        </OurPromise.Inner>
        <OurPromise.Button>Find Out More</OurPromise.Button>
      </OurPromise.Foreground>
    </OurPromise>
  )
}
