import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const CustomDocument = ({ html, head, state, css }) => (
  <Html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Wellness Wins</title>
      <style global jsx>{`
        @import url('{"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"};
      </style>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;