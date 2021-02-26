import Document, {Html, Head, Main, NextScript } from 'next/document';
import Link from "next/link";
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta 
              name="Description" 
              content="The personal website of Mr. Jackson Breyer, software engineer and human being." 
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;