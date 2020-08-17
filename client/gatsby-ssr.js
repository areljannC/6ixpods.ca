import React from 'react'
import { ThemeProvider, Layout } from './src/shared/components'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <Layout>{element}</Layout>
  </ThemeProvider>
)
