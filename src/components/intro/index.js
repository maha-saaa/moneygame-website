import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import MoneyGameCards from "@/public/images/money-game-cards.svg";
import LeftBracket from "@/public/images/left-bracket.svg";
import RightBracket from "@/public/images/right-bracket.svg";
import BgGlass from "@/public/images/bg-glass.svg";
import Bar from "@/public/images/bar.svg";
import ButtonBracket from "@/public/images/button-bracket.svg";

export default function Intro() {
  const classes = useStyles();

  return (
    <section className={classes.introContainer}>
      <BgGlass className={classes.bg} />
      <MoneyGameCards />
      <div className={classes.info}>
        <div className={classes.leftSec}>
          <ButtonBracket className={classes.timeLineBtn} />
        </div>
        <div className={classes.centerSec}>
          <div>
            <span>Current Prize Pool</span>
          </div>
          <span className={classes.textWithShadow}>$5,600,000</span>
          <Bar style={{ zIndex: 1 }} />
          <div>
            <LeftBracket />
            <span>10 winners $520,000 each </span>
            <RightBracket />
          </div>
          <div className="notched-rectengle-button">
            <span>MINT</span>
          </div>
        </div>
        <div className={classes.rightSec}>
          <span className={classes.rightSecTitle}>SOLD OUT?</span>
          <span className={classes.rightSecDesc}>
            You can still buy on secondary markets to participate in the game
            and game theory!
          </span>
          <span className={classes.rightSecTitle}>Price?</span>
          <span className={classes.rightSecDesc}>0.2 ETH each</span>
          <span>Press mint for more info</span>
        </div>
      </div>
    </section>
  );
}

const useStyles = createUseStyles({
  introContainer: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    padding: {
      right: 111,
      left: 111,
    },
    marginBottom: 180,
    color: colors.textPurple,
    "@media screen and (max-width: 1000px)": {
      padding: {
        right: 16,
        left: 16,
      },
    },
  },
  bg: {
    position: "absolute",
    top: 0,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 20,
    "@media screen and (max-width: 1000px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  leftSec: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 40,
  },
  timeLineBtn: {
    zIndex: 1,
    cursor: "pointer",
  },
  centerSec: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    "& div:nth-child(1)": {
      "& span": {
        fontSize: 24,
        fontStyle: "italic",
      },
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
