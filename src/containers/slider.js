import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Slider } from '../components'
import Img from 'gatsby-image'

export default function SliderContainer() {
  const data = useStaticQuery(graphql`
    query {
      mostPopular: file(relativePath: { eq: "slider/Most-Popular.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oils: file(relativePath: { eq: "slider/Oils.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      capsules: file(relativePath: { eq: "slider/Capsules.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      topicals: file(relativePath: { eq: "slider/Topicals.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kits: file(relativePath: { eq: "slider/Kits.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      newToCBD: file(relativePath: { eq: "slider/New-To-CBD.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sale: file(relativePath: { eq: "slider/Sale.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Slider>
      <Slider.Item i={1}>
        <Slider.Text>Most Popular</Slider.Text>
        <Slider.Image fluid={data.mostPopular.childImageSharp.fluid} />
      </Slider.Item>
      <Slider.Item i={2}>
        <Slider.Text>Oils</Slider.Text>
        <Slider.Image fluid={data.oils.childImageSharp.fluid} />
      </Slider.Item>
      <Slider.Item i={3}>
        <Slider.Text>Capsules</Slider.Text>
        <Slider.Image fluid={data.capsules.childImageSharp.fluid} />
      </Slider.Item>
      <Slider.Item i={4}>
        <Slider.Text>Topicals</Slider.Text>
        <Slider.Image fluid={data.topicals.childImageSharp.fluid} />
      </Slider.Item>
      <Slider.Item i={5}>
        <Slider.Text>Kits</Slider.Text>
        <Slider.Image fluid={data.kits.childImageSharp.fluid} />
      </Slider.Item>
      <Slider.Item i={6}>
        <Slider.Text>New to CBD</Slider.Text>
        <Slider.Image fluid={data.newToCBD.childImageSharp.fluid} />
      </Slider.Item>
      <Slider.Item i={7}>
        <Slider.Text>Sale</Slider.Text>
        <Slider.Image fluid={data.sale.childImageSharp.fluid} />
      </Slider.Item>
    </Slider>
  )
}
