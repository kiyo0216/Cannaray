import React from 'react'
import { MostPopular } from '../components'
import { useStaticQuery, graphql } from 'gatsby'

export default function MostPopularContainer() {
  const data = useStaticQuery(graphql`
    query {
      oraldrops300: file(relativePath: { eq: "mostpopular/Oral-Drops-300.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oraldrops300hover: file(relativePath: { eq: "mostpopular/Oral-Drops-300-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oraldrops750: file(relativePath: { eq: "mostpopular/Oral-Drops-750.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oraldrops750hover: file(relativePath: { eq: "mostpopular/Oral-Drops-750-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oraldrops1500: file(relativePath: { eq: "mostpopular/Oral-Drops-1500.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oraldrops1500hover: file(relativePath: { eq: "mostpopular/Oral-Drops-1500-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      capsules300: file(relativePath: { eq: "mostpopular/Capsules-300.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      capsules300hover: file(relativePath: { eq: "mostpopular/Capsule-300-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      capsules600: file(relativePath: { eq: "mostpopular/Capsules-600.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      capsules600hover: file(relativePath: { eq: "mostpopular/Capsules-600-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      musclebalm250: file(relativePath: { eq: "mostpopular/Muscle-Balm-250.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      musclebalm250hover: file(relativePath: { eq: "mostpopular/Muscle-Balm-250-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skincream250: file(relativePath: { eq: "mostpopular/Skin-Cream-250.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skincream250hover: file(relativePath: { eq: "mostpopular/Skin-Cream-250-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curcumincapsules450: file(relativePath: { eq: "mostpopular/Curcumin-Capsules-450.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curcumincapsules450hover: file(relativePath: { eq: "mostpopular/Curcumin-Capsules-450-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      selfcarekit: file(relativePath: { eq: "mostpopular/Self-Care-Kit.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      selfcarekithover: file(relativePath: { eq: "mostpopular/Self-Care-Kit-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      golferskit: file(relativePath: { eq: "mostpopular/Golfers-Kit.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      golferskithover: file(relativePath: { eq: "mostpopular/Golfers-Kit-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fitnesskit: file(relativePath: { eq: "mostpopular/Fitness-Kit.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fitnesskithover: file(relativePath: { eq: "mostpopular/Fitness-Kit-Hover.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <MostPopular>
      <MostPopular.Title>Most Popular</MostPopular.Title>
      <MostPopular.Text>Our most popular CBD essentials, loved<br />by you.</MostPopular.Text>
      <MostPopular.Link>Shop Most Popular</MostPopular.Link>
      <MostPopular.Inner>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.oraldrops300.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag green={true}>Best Seller</MostPopular.Tag>
            <MostPopular.Tag>Vegan</MostPopular.Tag>
            <MostPopular.Tag>Juniper &amp; Lime</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>Oral Drops</MostPopular.Name>
          <MostPopular.Rating rating="11115">(81)</MostPopular.Rating>
          <MostPopular.VolumePrice>300mg - $14</MostPopular.VolumePrice>
          <MostPopular.Was>Was $20</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.oraldrops750.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag>Calming</MostPopular.Tag>
            <MostPopular.Tag green={true}>Best Seller</MostPopular.Tag>
            <MostPopular.Tag>Easy Dosage</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>Oral Drops</MostPopular.Name>
          <MostPopular.Rating rating="11115">(61)</MostPopular.Rating>
          <MostPopular.VolumePrice>750mg - $18</MostPopular.VolumePrice>
          <MostPopular.Was>Was $30</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.oraldrops1500.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag>Calming</MostPopular.Tag>
            <MostPopular.Tag>Easy Dosage</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>Oral Drops</MostPopular.Name>
          <MostPopular.Rating rating="11115">(61)</MostPopular.Rating>
          <MostPopular.VolumePrice>1500mg - $32</MostPopular.VolumePrice>
          <MostPopular.Was>Was $50</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.capsules300.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag>Easy Dosage</MostPopular.Tag>
            <MostPopular.Tag>Vegan</MostPopular.Tag>
            <MostPopular.Tag>5 x Absorption</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>Capsules</MostPopular.Name>
          <MostPopular.Rating rating="11115">(16)</MostPopular.Rating>
          <MostPopular.VolumePrice>300mg - $16</MostPopular.VolumePrice>
          <MostPopular.Was>Was $25</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.capsules600.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag>Easy Dosage</MostPopular.Tag>
            <MostPopular.Tag>Vegan</MostPopular.Tag>
            <MostPopular.Tag>5 x Absorption</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>Capsules</MostPopular.Name>
          <MostPopular.Rating rating="11115">(16)</MostPopular.Rating>
          <MostPopular.VolumePrice>600mg - $30</MostPopular.VolumePrice>
          <MostPopular.Was>Was $45</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.musclebalm250.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag green={true}>Best Seller</MostPopular.Tag>
            <MostPopular.Tag>Soothing</MostPopular.Tag>
            <MostPopular.Tag>Muscle Tension</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>Muscle Balm</MostPopular.Name>
          <MostPopular.Rating rating="11111">(16)</MostPopular.Rating>
          <MostPopular.VolumePrice>250mg - $18</MostPopular.VolumePrice>
          <MostPopular.Was>Was $28</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.skincream250.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag>Recovery</MostPopular.Tag>
            <MostPopular.Tag>Vegan</MostPopular.Tag>
            <MostPopular.Tag>Eucalyptus</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>Skin Cream</MostPopular.Name>
          <MostPopular.Rating rating="11111">(15)</MostPopular.Rating>
          <MostPopular.VolumePrice>250mg - $15</MostPopular.VolumePrice>
          <MostPopular.Was>Was $23</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.curcumincapsules450.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag>Easy Dosage</MostPopular.Tag>
            <MostPopular.Tag>5 x Absorption</MostPopular.Tag>
            <MostPopular.Tag>Superfood</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>Curcumin Capsules</MostPopular.Name>
          <MostPopular.Rating rating="11115">(10)</MostPopular.Rating>
          <MostPopular.VolumePrice>450mg - $21</MostPopular.VolumePrice>
          <MostPopular.Was>Was $35</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.selfcarekit.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag>Vegan</MostPopular.Tag>
            <MostPopular.Tag>20% Saving</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>CBD Self-Care Kit (Worth $78)</MostPopular.Name>
          <MostPopular.Rating rating="11111">(2)</MostPopular.Rating>
          <MostPopular.VolumePrice>Self-Care Kit - $45</MostPopular.VolumePrice>
          <MostPopular.Was>Was $63</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.golferskit.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag green={true}>Best Seller</MostPopular.Tag>
            <MostPopular.Tag>PGA Partner</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>Golfer&apos;s CBD Kit - Save $10</MostPopular.Name>
          <MostPopular.VolumePrice>Golfer&apos;s Kit - $32</MostPopular.VolumePrice>
          <MostPopular.Was>Was $48</MostPopular.Was>
        </MostPopular.Item>
        <MostPopular.Item>
          <MostPopular.Image fluid={data.fitnesskit.childImageSharp.fluid} />
          <MostPopular.Tags>
            <MostPopular.Tag>20% Saving</MostPopular.Tag>
            <MostPopular.Tag>Superfood</MostPopular.Tag>
          </MostPopular.Tags>
          <MostPopular.Name>CBD Fitness Kit (Worth $93)</MostPopular.Name>
          <MostPopular.Rating rating="11150">(3)</MostPopular.Rating>
          <MostPopular.VolumePrice>Fitness Kit - $52</MostPopular.VolumePrice>
          <MostPopular.Was>Was $75</MostPopular.Was>
        </MostPopular.Item>
      </MostPopular.Inner>
    </MostPopular>
  )
}
