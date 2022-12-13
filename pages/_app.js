import Head from 'next/head';
import { useRouter } from 'next/router';
import { GlobalStyles } from 'twin.macro';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://whitenappsolutions.com` +
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-773YZ1L3YR"
        ></script>

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-773YZ1L3YR');
              `,
          }}
        />
      </Head>
      <div>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
