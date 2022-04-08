import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import CoinLeft from "@/public/images/coin-left.svg";
import CoinRight from "@/public/images/coin-right.svg";
import LineNumberUp from "@/public/images/line-number-up.svg";
import LineNumberDown from "@/public/images/line-number-down.svg";
import PlayCardOne from "@/public/images/play-card-one.svg";

export default function HowToPlay() {
  const classes = useStyles();

  return (
    <section className={classes.howToPlayContainer}>
      <div className={classes.header}>
        <CoinLeft />
        <span className={classes.title}>HOW TO PLAY</span>
        <CoinRight />
      </div>
      <div className={classes.info}>
        <div className={classes.playRow}>
          <div className="outer-circle">
            <div className="inner-circle">
              <span>1</span>
            </div>
          </div>
          <div className={classes.leftSidedPlayRow}>
            <span className={classes.leftSidedPlayRowTitle}>
              MINT YOUR PASS
            </span>
            <span className={classes.leftSidedPlayRowDesc}>
              {`Get on the whitelist and mint your pass.\nYour minting funds go into the prize pool.`}
            </span>
          </div>
          <PlayCardOne />
        </div>
        <div className={classes.playRow}>
          <PlayCardOne />
          <div className={classes.leftSidedPlayRow}>
            <span className={classes.leftSidedPlayRowTitle}>Determination</span>
            <span className={classes.leftSidedPlayRowDesc}>
              {`Using Smart Contracts your pass is\n determined as a winner or loser. 
                We can’t change this or know who the\n winners are.`}
            </span>
          </div>
          <div className="outer-circle">
            <div className="inner-circle">
              <span>2</span>
            </div>
          </div>
        </div>
        <div className={classes.playRow}>
          <div className="outer-circle">
            <div className="inner-circle">
              <span>3</span>
            </div>
          </div>
          <div className={classes.leftSidedPlayRow}>
            <span className={classes.leftSidedPlayRowTitle}>
              Burn your Pass
            </span>
            <span className={classes.leftSidedPlayRowDesc}>
              {`Your passes status as winner or loser is only
                determined when you burn the pass in the\n prize poll contract.
                If its revealed as a winner you claim your %\n of the jackpot ($5000,000)`}
            </span>
          </div>
          <PlayCardOne />
        </div>
        <div className={classes.playRow}>
          <PlayCardOne />
          <div className={classes.leftSidedPlayRow}>
            <span className={classes.leftSidedPlayRowTitle}>
              Burn your Pass
            </span>
            <span className={classes.leftSidedPlayRowDesc}>
              {`Passes can also be sold on secondary, what
                will happen if there is only 10 passes left
                and still a prize to claim, will you risk
                selling your winner on secondary market or
                will you try to claim the prize yourself?`}
            </span>
          </div>
          <div className="outer-circle">
            <div className="inner-circle">
              <span>4</span>
            </div>
          </div>
        </div>
        <div className={classes.playCol}>
          <LineNumberUp />
          <span className={classes.centerPlayColTitle}>The Difference?</span>
          <span className={classes.centerPlayColDesc}>
            Unlike the traditional lottery games, ours is 100% provably fair,
            you can check the contracts and see that we could neither control
            who the winners were or see which passes were winners. There is no
            way for us to not payout the winners, or cheat the games. You are
            also able to resell your pass on secondary markets as the chances of
            your pass being a winner goes up, creating a game-theorized version
            of lottery.
          </span>
          <span className={classes.centerPlayColDesc}>
            We only charge a 10% fee compared to the 50% traditional lotteries
            charge. If you want to read more about the pass and also see more
            technical details, checkout our whitepaper
          </span>
          <div className="notched-rectengle-button">
            <span>Whitepaper</span>
          </div>
          <LineNumberDown />
        </div>
      </div>
    </section>
  );
}

const useStyles = createUseStyles({
  howToPlayContainer: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 180,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 123,
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
  info: {
    display: "flex",
    flexDirection: "column",
    // "@media screen and (max-width: 1000px)": {
    //   padding: {
    //     right: 16,
    //     left: 16,
    //   },
    // },
  },
  playRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: {
      left: 100,
      right: 100,
    },
    marginBottom: 20,
  },
  playCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: {
      left: 135,
      right: 135,
    },
  },
  playTitle: {
    fontSize: 44,
    fontWeight: "bold",
    color: colors.whiteWithOpacity,
  },
  playDesc: {
    fontSize: 24,
    color: colors.textPurpleWithOpacity,
  },
  leftSidedPlayRow: {
    display: "flex",
    flexDirection: "column",
  },
  leftSidedPlayRowTitle: {
    composes: ["$playTitle"],
    textAlign: "start",
    marginBottom: 40,
  },
  leftSidedPlayRowDesc: {
    composes: ["$playDesc"],
    textAlign: "start",
    whiteSpace: "pre-line",
  },
  centerPlayColTitle: {
    composes: ["$playTitle"],
    textAlign: "center",
    marginBottom: 20,
  },
  centerPlayColDesc: {
    composes: ["$playDesc"],
    textAlign: "center",
    marginBottom: 40,
  },
});
