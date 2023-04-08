import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../src/theme'

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Head>
        <title>Anunx</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  page: PropTypes.object.isRequired,
}