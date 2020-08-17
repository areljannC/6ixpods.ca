
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from '../../constants/themes'
import Layout from './Layout'

// Test Suite
describe(`src/containers/Landing`, () => {
  test(`renderes <Landing /> to the page`, () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <Layout />
      </ThemeProvider>
    )
    expect(container.querySelector(`div`)).toBeInTheDocument()
  })
})