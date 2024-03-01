import { NextSeo } from "next-seo";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Layout from "src/features/layout";
import Content from "src/features/content";
import Preloader from "src/features/preloader";

export default function Home() {
  const router = useRouter();
  const containerRef = useRef(null);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 5000);
  }, []);

  return preloader ? (
    <Preloader />
  ) : (
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
          <m.main
            initial="initial"
            animate="enter"
            exit="exit"
            style={{ backgroundColor: "#08080E" }}
          >
            <div
              data-scroll-container
              ref={containerRef}
              // onLoad={() => setPreloader(false)}
            >
              <Content />
            </div>
          </m.main>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </Layout>
  );
}
