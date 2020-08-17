import React, { FC } from 'react'
import styled from '../../shared/components/styled'
import device from '../../shared/constants/device'

// Component
const Landing: FC = () => (
  <LandingContainer>
    <Title>6ixpods.ca</Title>
    <Subtitle>The best budget earpods in the 6ix.</Subtitle>
    <Subtitle>Coming soon...</Subtitle>
  </LandingContainer>
)

// Styles
const LandingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  font-family: ${({ theme }) => theme.fonts.heading};
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSizes[7]}px;
  }
`

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-family: ${({ theme }) => theme.fonts.body};
  text-align: center;
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
`

// Display Names
Landing.displayName = `Landing`
LandingContainer.displayName = `LandingContainer`
Title.displayName = `Title`
Subtitle.displayName = `Subtitle`

export default Landing