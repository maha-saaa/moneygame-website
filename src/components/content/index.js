import React from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import colors from "@/styles/colors";
import headerLine from "@/public/images/header-line.webp";
import Intro from "src/components/intro";
import HowToPlay from "src/components/howToPlay";
import Team from "src/components/team";
import Faq from "src/components/faq";
import Footer from "src/components/footer";

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
