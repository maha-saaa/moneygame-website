import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Header from "@/components/header";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();
  const containerRef = useRef(null);

  return (
    <Layout>
      <NextSeo title="Home" />
      <LazyMotion features={domAnimation}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          location={router.asPath}
          onLocationChange={(scroll) =>
            scroll.scrollTo(0, { duration: 0, disableLerp: true })
          }
          containerRef={containerRef}
        >
          <Header />
          <m.main initial="initial" animate="enter" exit="exit">
            <div data-scroll-container ref={containerRef}></div>
          </m.main>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </Layout>
  );
}
