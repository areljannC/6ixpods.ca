
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from '../../shared/constants/themes'
import Landing from './Landing'

// Test Suite
describe(`src/containers/Landing`, () => {
  test(`renderes <Landing /> to the page`, () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <Landing />
      </ThemeProvider>
    )
    expect(container.querySelector(`div`)).toBeInTheDocument()
    expect(screen.getByText(`6ixpods.ca`)).toBeInTheDocument()
    expect(screen.getByText(`The best budget earpods in the 6ix.`)).toBeInTheDocument()
    expect(screen.getByText(`Coming soon...`)).toBeInTheDocument()
  })
})