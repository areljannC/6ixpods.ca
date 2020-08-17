import React, { FC, ReactNode } from 'react'
import styled from '../styled'

// Prop Types
type Props = {
  children: ReactNode
}

// Component
const Layout: FC = ({ children }: Props) => (
  <LayoutContainer>{children}</LayoutContainer>
)

// Styles
const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.background};

  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }
`

// Display Names
Layout.displayName = `Layout`
LayoutContainer.displayName = `LayoutContainer`

export default Layout
