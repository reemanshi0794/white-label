import Head from "next/head";
import {useRouter} from "next/router";
import {GlobalStyles} from "twin.macro";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  const router = useRouter();
  const canonicalUrl = (`https://whitenappsolutions.com` + (router.asPath === "/" ? "" : router.asPath)).split("?")[0];

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-773YZ1L3YR" />
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
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Whiten App Solutions",
  "url": "https://whitenappsolutions.com/",
  "logo": "",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1 (416) 948-7063",
    "contactType": "customer service",
    "areaServed": "CA",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100088241919758",
    "https://whitenappsolutions.com/",
    "https://www.linkedin.com/company/whiten-app-solutions/",
    "https://www.instagram.com/whiten_apps/",
    "https://twitter.com/WhitenApps",
    "https://www.youtube.com/@whitenappssolutions"
  ]
}`}
        </script>
      </Head>
      <div>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
