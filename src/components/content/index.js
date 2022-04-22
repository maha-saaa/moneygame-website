import React from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import dynamic from "next/dynamic";
import colors from "@/styles/colors";
import headerLine from "@/public/images/header-line.png";

const Intro = dynamic(() => import("@/components/intro"), {
  loading: () => <div />,
});
const HowToPlay = dynamic(() => import("@/components/howToPlay"), {
  loading: () => <div />,
});
const Team = dynamic(() => import("@/components/team"), {
  loading: () => <div />,
});
const Faq = dynamic(() => import("@/components/faq"), {
  loading: () => <div />,
});
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div />,
});

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.container} data-scroll-section>
      <Image alt="headerLine" src={headerLine} loading="lazy" />
      <Intro />
      <HowToPlay />
      <Faq />
      <Team />
      <Footer />
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    backgroundColor: colors.background,
    paddingBottom: 160,
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});
