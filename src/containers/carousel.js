import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MediaQuery from 'react-responsive'
import { Carousel } from '../components'

export default function CarouselContainer() {
  const data = useStaticQuery(graphql`
    query {
      desktop1: file(relativePath: { eq: "carousel/Carousel-1-Desktop.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop2: file(relativePath: { eq: "carousel/Carousel-2-Desktop.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop3: file(relativePath: { eq: "carousel/Carousel-3-Desktop.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile1: file(relativePath: { eq: "carousel/Carousel-1-Mobile.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile2: file(relativePath: { eq: "carousel/Carousel-2-Mobile.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile3: file(relativePath: { eq: "carousel/Carousel-3-Mobile.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

	const desktopSlide = [
    {
      image : data.desktop1.childImageSharp.fluid,
      heading : "Winter Sale - Up to\n40% Off",
      link : "Shop Sale"
    }, 
    {
      image : data.desktop2.childImageSharp.fluid,
      heading : "Supercharge Your\nWorkout",
      link : "CBD For Fitness"
    }, 
    {
      image : data.desktop3.childImageSharp.fluid,
      heading : "What is the\nEndocannabinoid\nSystem?",
      link : "The Endocannabinoid System"
    }
  ]

	const mobileSlide = [
    {
      image : data.mobile1.childImageSharp.fluid,
      heading : "Winter Sale - Up to\n40% Off",
      link : "Shop Sale"
    }, 
    {
      image : data.mobile2.childImageSharp.fluid,
      heading : "Supercharge Your\nWorkout",
      link : "CBD For Fitness"
    }, 
    {
      image : data.mobile3.childImageSharp.fluid,
      heading : "What is the\nEndocannabinoid\nSystem?",
      link : "The Endocannabinoid System"
    }
  ]

  return (
		<>
			<MediaQuery maxDeviceWidth={999}>
				<Carousel slides={mobileSlide} />
			</MediaQuery>
			<MediaQuery minDeviceWidth={1000}>
				<Carousel slides={desktopSlide} />
			</MediaQuery>
		</>
  )
}
