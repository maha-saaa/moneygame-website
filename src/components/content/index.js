import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import HorizontalLine from "@/public/images/horizontal-line.svg";
import Intro from "@/components/intro";

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HorizontalLine />
      <Intro />
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    backgroundColor: colors.background,
  },
});
