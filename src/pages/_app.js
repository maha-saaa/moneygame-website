import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "@/utils/seo.config";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  function getLibrary(provider, connector) {
    return new Web3Provider(provider);
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO} />
      <Web3ReactProvider getLibrary={getLibrary}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Web3ReactProvider>
    </>
  );
}
