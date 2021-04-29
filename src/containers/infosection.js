import React from 'react'
import { InfoSection } from '../components'

export default function InfoSectionContainer() {
  return (
    <InfoSection>
      <InfoSection.Subtitle>We&apos;re making self-care as easy as ABC with the CBD Journal.</InfoSection.Subtitle>
      <InfoSection.Button>Journal</InfoSection.Button>
      <InfoSection.Inner>
        <InfoSection.Item>
          <InfoSection.ItemTitle> 
            What is CBD?
          </InfoSection.ItemTitle> 
          <InfoSection.ItemText>
            Your all-bases-covered guide to nature&apos; wellness warrior.
          </InfoSection.ItemText> 
          <InfoSection.ItemLink> 
            CBD 101
          </InfoSection.ItemLink> 
        </InfoSection.Item>
        <InfoSection.Item>
          <InfoSection.ItemTitle> 
            Taking CBD
          </InfoSection.ItemTitle> 
          <InfoSection.ItemText>
            Perfect your dosage of CBD oils, capsules and topicals.
          </InfoSection.ItemText> 
          <InfoSection.ItemLink> 
            How to use CBD
          </InfoSection.ItemLink> 
        </InfoSection.Item>
        <InfoSection.Item>
          <InfoSection.ItemTitle> 
            Supporting Wellbeing
          </InfoSection.ItemTitle> 
          <InfoSection.ItemText>
            Exploring the impact of CBD on your emotional wellbeing.
          </InfoSection.ItemText> 
          <InfoSection.ItemLink> 
            CBD and Emotional Wellbeing
          </InfoSection.ItemLink> 
        </InfoSection.Item>
      </InfoSection.Inner>
    </InfoSection>
  )
}
