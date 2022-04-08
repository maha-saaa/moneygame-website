import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import CoinLeft from "@/public/images/coin-left.svg";
import CoinRight from "@/public/images/coin-right.svg";
import LineNumberUp from "@/public/images/line-number-up.svg";
import LineNumberDown from "@/public/images/line-number-down.svg";
import PlayCardOne from "@/public/images/play-card-one.svg";
import PlayCardTwo from "@/public/images/play-card-two.svg";
import PlayCardThree from "@/public/images/play-card-three.svg";
import PlayCardFour from "@/public/images/play-card-four.svg";
import PlayLineLeft from "@/public/images/play-line-left.svg";
import PlayLineRight from "@/public/images/play-line-right.svg";

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
          <div
            className="outer-circle"
            style={{ position: "absolute", left: 100, top: 195 }}
          >
            <div className="inner-circle">
              <span>1</span>
            </div>
          </div>
          <div className={classes.leftSidedPlayRow}>
            <span className={classes.firstPlayRowTitle}>MINT YOUR PASS</span>
            <span className={classes.firstPlayRowDesc}>
              {`Get on the whitelist and mint your pass.\nYour minting funds go into the prize pool.`}
            </span>
          </div>
          <PlayLineLeft className={classes.firstPlayLine} />
          <PlayCardOne className={classes.playCard} />
        </div>
        <div className={classes.playRow}>
          <PlayCardTwo className={classes.playCard} />
          <PlayLineRight className={classes.secondPlayLine} />
          <div className={classes.leftSidedPlayRow}>
            <span className={classes.secondPlayRowTitle}>Determination</span>
            <span className={classes.secondPlayRowDesc}>
              {`Using Smart Contracts your pass is\n determined as a winner or loser. 
                We can’t change this or know who the\n winners are.`}
            </span>
          </div>
          <div
            className="outer-circle"
            style={{ position: "absolute", right: 100, bottom: 120 }}
          >
            <div className="inner-circle">
              <span>2</span>
            </div>
          </div>
        </div>
        <div className={classes.playRow}>
          <div
            className="outer-circle"
            style={{ position: "absolute", left: 100, bottom: 150 }}
          >
            <div className="inner-circle">
              <span>3</span>
            </div>
          </div>
          <div className={classes.leftSidedPlayRow}>
            <span className={classes.thirdPlayRowTitle}>Burn your Pass</span>
            <span className={classes.thirdPlayRowDesc}>
              {`Your passes status as winner or loser is only
                determined when you burn the pass in the\n prize poll contract.
                If its revealed as a winner you claim your %\n of the jackpot ($5000,000)`}
            </span>
          </div>
          <PlayLineLeft className={classes.thirdPlayLine} />
          <PlayCardThree className={classes.playCard} />
        </div>
        <div className={classes.playRow}>
          <PlayCardFour className={classes.playCard} />
          <PlayLineRight className={classes.fourthPlayLine} />
          <div className={classes.leftSidedPlayRow}>
            <span className={classes.fourthPlayRowTitle}>Secondary Market</span>
            <span className={classes.fourthPlayRowDesc}>
              {`Passes can also be sold on secondary, what
                will happen if there is only 10 passes left
                and still a prize to claim, will you risk
                selling your winner on secondary market or
                will you try to claim the prize yourself?`}
            </span>
          </div>
          <div
            className="outer-circle"
            style={{ position: "absolute", right: 100, top: 200 }}
          >
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
    // alignItems: "center",
    padding: {
      left: 100,
      right: 100,
    },
    marginBottom: 20,
    position: "relative",
  },
  playCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: {
      left: 135,
      right: 135,
    },
    marginTop: 100
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
  playCard: {
    zIndex: 1,
  },

  firstPlayRowTitle: {
    composes: ["$playTitle"],
    textAlign: "start",
    position: "absolute",
    top: 100,
    left: 300,
  },
  firstPlayRowDesc: {
    composes: ["$playDesc"],
    textAlign: "start",
    whiteSpace: "pre-line",
    position: "absolute",
    top: 230,
    left: 300,
  },
  firstPlayLine: {
    position: "absolute",
    right: 490,
    top: 184,
  },

  secondPlayRowTitle: {
    composes: ["$playTitle"],
    textAlign: "start",
    position: "absolute",
    top: 180,
    right: 440,
  },
  secondPlayRowDesc: {
    composes: ["$playDesc"],
    textAlign: "start",
    whiteSpace: "pre-line",
    position: "absolute",
    top: 300,
    right: 320,
  },
  secondPlayLine: {
    position: "absolute",
    left: 514,
    top: 263,
  },

  thirdPlayRowTitle: {
    composes: ["$playTitle"],
    textAlign: "start",
    position: "absolute",
    top: 150,
    left: 300,
  },
  thirdPlayRowDesc: {
    composes: ["$playDesc"],
    textAlign: "start",
    whiteSpace: "pre-line",
    position: "absolute",
    top: 280,
    left: 300,
  },
  thirdPlayLine: {
    position: "absolute",
    right: 489,
    top: 230,
  },

  fourthPlayRowTitle: {
    composes: ["$playTitle"],
    textAlign: "start",
    position: "absolute",
    top: 110,
    right: 440,
  },
  fourthPlayRowDesc: {
    composes: ["$playDesc"],
    textAlign: "start",
    whiteSpace: "pre-line",
    position: "absolute",
    top: 220,
    right: 330,
  },
  fourthPlayLine: {
    position: "absolute",
    left: 514,
    top: 184,
  },
});
