import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ReviewSection } from '../components'

export default function ReviewSectionContainer() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "review/Image.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sheerluxe: file(relativePath: { eq: "review/Sheer-Luxe.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metro: file(relativePath: { eq: "review/Metro.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mailonline: file(relativePath: { eq: "review/Mail-Online.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thegrocer: file(relativePath: { eq: "review/The-Grocer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const reviewdata = [
    { 
      text: `"Cannaray's CBD product won't disappoint"`,
      logo: data.sheerluxe.childImageSharp.fluid
    },
    {
      text: `"Put this balm on during a workout or a long run"`,
      logo: data.metro.childImageSharp.fluid
    },
    {
      text: `"May help calm those who suffer with stress and anxiety"`,
      logo: data.mailonline.childImageSharp.fluid
    },
    {
      text: `"Designed to target anxiety, insomnia, joint and muscle pain"`,
      logo: data.thegrocer.childImageSharp.fluid
    }
  ]

  return (
    <ReviewSection>
      <ReviewSection.Image fluid={data.image.childImageSharp.fluid} />
      <ReviewSection.Reviews data={reviewdata} />
      <ReviewSection.Link>
        More from the Press
      </ReviewSection.Link>
    </ReviewSection>
  )
}
