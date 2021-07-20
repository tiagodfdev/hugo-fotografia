import * as React from "react"
import { ChakraProvider, CSSReset } from "@chakra-ui/core"
import Router from 'next/router'
import NProgress from 'nprogress'
import Layout from "components/Layout";
import '../styles/nprogress.css';
import '../styles/globals.css'
import '../styles/Home.css';
import '../styles/Header.css';
import '../styles/HeaderTrabalhos.css';
import '../styles/slick.css';
import '../styles/framerMotion.css';
import 'react-image-lightbox/style.css';




Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS >
      <Layout>
        <CSSReset />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
