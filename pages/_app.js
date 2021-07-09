import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/style.css";
import NextNprogress from "nextjs-progressbar";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="512x512"
          href="/static/icons/icon.jpg"
        />
      </Head>
      <Component {...pageProps} />
      <NextNprogress
        color="#fff"
        startPosition={0.3}
        stopDelayMs={200}
        height="5"
      />
    </>
  );
}
