import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import HorizontalLine from "@/public/images/horizontal-line.svg";
import CoinLeft from "@/public/images/coin-left.svg";
import CoinRight from "@/public/images/coin-right.svg";

export default function HowToPlay() {
  const classes = useStyles();

  return (
    <div className={classes.howToPlayContainer}>
      <div className={classes.header}>
        <CoinLeft />
        <span className={classes.title}>HOW TO PLAY</span>
        <CoinRight />
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  howToPlayContainer: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // "@media screen and (max-width: 1000px)": {
    //   padding: {
    //     right: 16,
    //     left: 16,
    //   },
    // },
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 132,
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontStyle: "italic",
    fontWeight: "bold",
    color: colors.whiteWithOpacity,
    textShadow: "0px 9px 9px rgba(208, 198, 247, 0.6)",
    textAlign: "center",
    margin: {
      left: 40,
      right: 40,
    },
  },
});
