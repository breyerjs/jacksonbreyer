import Document, { Head, Main, NextScript } from 'next/document';
import Link from "next/link";
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* Load this font early since it isn't used until later on */}
          <link 
              rel="preload" 
              href="/font/Spectral/spectral-light.woff2" 
              as="font" 
              type="font/woff2"
              crossOrigin=""
          />

          <meta 
              name="Description" 
              content="The personal website of Mr. Jackson Breyer, software engineer and human being." 
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;