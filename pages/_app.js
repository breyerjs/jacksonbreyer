// This file aplies the global styles to the app
import styles from './_app.scss';

import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
            <title>Jackson Breyer</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
