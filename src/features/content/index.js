import React from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import colors from "@/styles/colors";
import headerLine from "@/public/images/header-line.webp";
import Intro from "src/features/intro";
import HowToPlay from "src/features/howToPlay";
import Team from "src/features/team";
import Faq from "src/features/faq";
import Footer from "src/features/footer";

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
