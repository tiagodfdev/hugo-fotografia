import * as React from 'react';
import Head from 'next/head';
import {Helmet} from "react-helmet";

interface SEOProps {
  title: string
}

const SEO = ( {title} : SEOProps) => {
  return(
    <>
    <Helmet >
      <html lang='pt-br' />
    </Helmet>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="./_next/static/media/Fixture Condensed Regular 2.27bb6d85b6dad86534c7e5584354e8c9.otf" as="font" type="font/otf" crossOrigin="" /> 
      <title>Hugo Demetrio | Fotografia em Recife | {title}</title>
      <meta name="description" content="Fotógrafo em Recife | Fotos de gestantes, modelos, eventos e nascimentos | contato: (81)99839-6989" />
      <meta charSet="UTF-8" />
      <meta name="author" content="Hugo Demetrio" />
      <meta httpEquiv="content-language" content="pt-br" />
      <meta name="theme-color" content="#556A7B"/>
      <meta property="og:image" content="../assets/icons/logo.png"/>
    </Head>
    </>
  )
}
export default SEO;
