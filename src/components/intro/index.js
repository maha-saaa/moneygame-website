import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import MoneyGameCards from "@/public/images/money-game-cards.svg";
import LeftBracket from "@/public/images/left-bracket.svg";
import RightBracket from "@/public/images/right-bracket.svg";
import bgGlass from "@/public/images/bg-glass.svg";
import Bar from "@/public/images/bar.svg";
import ArrowDown from "@/public/images/arrow-down.svg";

export default function Intro() {
  const classes = useStyles();

  return (
    <section
      className={classes.container}
      style={{ backgroundImage: `url(${bgGlass})` }}
    >
      <MoneyGameCards />
      <div className={classes.info}>
        <div className={classes.leftSec}>
          <div className={classes.timeLineBtn}>
            <p className={classes.timeLineText}>Time Line</p>
            <ArrowDown />
          </div>
        </div>
        <div className={classes.centerSec}>
          <span style={{ fontStyle: "italic" }}>Current Prize Pool</span>
          <span className={classes.textWithShadow}>$5,600,000</span>
          <Bar />
          <div>
            <LeftBracket />
            <span>10 winners $520,000 each </span>
            <RightBracket />
          </div>
          <div class="notched-rectengle-button">
            <span>MINT</span>
          </div>
        </div>
        <div className={classes.rightSec}>
          <span className={classes.rightSecTitle}>SOLD OUT?</span>
          <span className={classes.rightSecDesc}>
            You can still buy on secondary markets to participatein the game and
            game theory!
          </span>
          <span className={classes.rightSecTitle}>Price?</span>
          <span className={classes.rightSecDesc}>
            600 passes waiting for you just 0.2 ETH each
          </span>
          <span>Press mint for more info</span>
        </div>
      </div>
    </section>
  );
}

const useStyles = createUseStyles({
  container: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: {
      right: 111,
      left: 111,
    },
    color: colors.textPurple,
    "@media screen and (max-width: 1000px)": {
      padding: {
        right: 16,
        left: 16,
      },
    },
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 20,
  },
  leftSec: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 40,
  },
  timeLineBtn: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(208, 198, 247, 0.3)",
    minWidth: 167,
    borderRadius: 1,
    cursor: "pointer",
  },
  timeLineText: {
    fontSize: 20,
    fontWeight: 400,
    color: colors.whiteWithOpacity,
    marginRight: 16,
  },
  centerSec: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    "& span:nth-child(1)": {
      fontSize: 24,
    },

    "& div:nth-child(4)": {
      display: "flex",
      flexDirection: "row",
      justifyItems: "center",
      alignItems: "center",
      marginBottom: 18,
      "& span": {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
  },
  textWithShadow: {
    fontSize: 96,
    fontStyle: "italic",
    fontWeight: "bold",
    color: colors.whiteWithOpacity,
    textShadow: "0px 9px 9px rgba(208, 198, 247, 0.6)",
    margin: {
      top: 10,
      bottom: 10,
    },
  },
  rightSec: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginLeft: 40,

    "& span:nth-child(5)": {
      fontSize: 14,
      fontWeight: "bold",
    },
  },
  rightSecTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  rightSecDesc: {
    fontSize: 14,
    color: colors.textPurpleWithOpacity,
    marginBottom: 20,
  },
});
