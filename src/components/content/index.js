import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import HorizontalLine from "@/public/images/horizontal-line.svg";
import Intro from "@/components/intro";
import HowToPlay from "@/components/howToPlay";
import Team from "@/components/team";
import Faq from "@/components/faq";
import Footer from "@/components/footer";


export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.container} data-scroll-section>
      <HorizontalLine />
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
  },
});
