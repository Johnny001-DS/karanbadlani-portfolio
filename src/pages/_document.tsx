import { Html, Head, Main, NextScript } from 'next/document';
import nextConfig from '../../next.config';

const basePath = nextConfig.basePath || '';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}