import React from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import colors from "@/styles/colors";
import coinLeft from "@/public/images/coin-left.png";
import coinRight from "@/public/images/coin-right.png";
import lineNumberUp from "@/public/images/line-number-up.png";
import lineNumberDown from "@/public/images/line-number-down.png";
import lineNumberUpS from "@/public/images/line-number-up-s.png";
import playCardOne from "@/public/images/play-card-one.png";
import playCardTwo from "@/public/images/play-card-two.png";
import playCardThree from "@/public/images/play-card-three.png";
import playCardFour from "@/public/images/play-card-four.png";
import PlayLineLeft from "@/public/images/play-line-left.svg";
import PlayLineRight from "@/public/images/play-line-right.svg";
import Line from "@/public/images/line.svg";

export default function HowToPlay() {
  const classes = useStyles();

  return (
    <section className={classes.howToPlayContainer}>
      <div className={classes.header}>
        <Line />
        <Image alt="coinLeft" src={coinLeft} />
        <span
          className={classes.title}
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="down"
          data-scroll-direction="vertical"
        >
          HOW TO PLAY
        </span>
        <Image alt="coinRight" src={coinRight} />
        <Line />
      </div>
      <div className={classes.info}>
        <div className={classes.playRow}>
          <div
            className="outer-circle"
            style={{ position: "absolute", left: 110, bottom: 160 }}
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
          <Image
            alt="playCardOne"
            src={playCardOne}
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="down"
            data-scroll-direction="vertical"
          />
        </div>
        <div className={classes.playRow}>
          <Image
            alt="playCardTwo"
            src={playCardTwo}
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="down"
            data-scroll-direction="vertical"
          />
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
            style={{ position: "absolute", right: 103, bottom: 90 }}
          >
            <div className="inner-circle">
              <span>2</span>
            </div>
          </div>
        </div>
        <div className={classes.playRow}>
          <div
            className="outer-circle"
            style={{ position: "absolute", left: 107, bottom: 120 }}
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
                If it's revealed as a winner you claim your %\n of the jackpot ($5000,000)`}
            </span>
          </div>
          <PlayLineLeft className={classes.thirdPlayLine} />
          <Image
            alt="playCardThree"
            src={playCardThree}
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="down"
            data-scroll-direction="vertical"
          />
        </div>
        <div className={classes.playRow}>
          <Image
            alt="playCardFour"
            src={playCardFour}
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="down"
            data-scroll-direction="vertical"
          />
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
            style={{ position: "absolute", right: 104, bottom: 170 }}
          >
            <div className="inner-circle">
              <span>4</span>
            </div>
          </div>
        </div>
        <div className={classes.playCol}>
          <Image alt="lineNumberUp" src={lineNumberUp} />
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
          <Image alt="lineNumberDown" src={lineNumberDown} />
        </div>
      </div>

      <div className={classes.infoS}>
        <div className={classes.rowS}>
          <Image alt="lineNumberUpS" src={lineNumberUpS} />
          <span className={classes.lineNumber}>1</span>
          <span className={classes.rowTitleS}>MINT YOUR PASS</span>
          <span className={classes.rowDescS}>
            {`Get on the whitelist and mint your pass.\nYour minting funds go into the prize pool.`}
          </span>
          <Image alt="playCardOne" src={playCardOne} />
        </div>
        <div className={classes.rowS}>
          <span className={classes.lineNumber}>2</span>
          <Image alt="lineNumberUpS" src={lineNumberUpS} />
          <span className={classes.rowTitleS}>Determination</span>
          <span className={classes.rowDescS}>
            {`Using Smart Contracts your pass is\n determined as a winner or loser. 
                We can’t change this or know who the\n winners are.`}
          </span>
          <Image alt="playCardTwo" src={playCardTwo} />
        </div>
        <div className={classes.rowS}>
          <span className={classes.lineNumber}>3</span>
          <Image alt="lineNumberUpS" src={lineNumberUpS} />
          <span className={classes.rowTitleS}>Burn your Pass</span>
          <span className={classes.rowDescS}>
            {`Your passes status as winner or loser is only
                determined when you burn the pass in the\n prize poll contract.
                If it's revealed as a winner you claim your %\n of the jackpot ($5000,000)`}
          </span>
          <Image alt="playCardThree" src={playCardThree} />
        </div>
        <div className={classes.rowS}>
          <span className={classes.lineNumber}>4</span>
          <Image alt="lineNumberUpS" src={lineNumberUpS} />
          <span className={classes.rowTitleS}>Secondary Market</span>
          <span className={classes.rowDescS}>
            {`Passes can also be sold on secondary, what
                will happen if there is only 10 passes left
                and still a prize to claim, will you risk
                selling your winner on secondary market or
                will you try to claim the prize yourself?`}
          </span>
          <Image alt="playCardFour" src={playCardFour} />
        </div>
        <div className={classes.rowS}>
          <Image alt="lineNumberUp" src={lineNumberUp} />
          <span className={classes.lastRowTitleS}>The Difference?</span>
          <span className={classes.rowDescS}>
            Unlike the traditional lottery games, ours is 100% provably fair,
            you can check the contracts and see that we could neither control
            who the winners were or see which passes were winners. There is no
            way for us to not payout the winners, or cheat the games. You are
            also able to resell your pass on secondary markets as the chances of
            your pass being a winner goes up, creating a game-theorized version
            of lottery.
          </span>
          <span className={classes.rowDescS}>
            We only charge a 10% fee compared to the 50% traditional lotteries
            charge. If you want to read more about the pass and also see more
            technical details, checkout our whitepaper
          </span>
          <div className="notched-rectengle-button">
            <span>Whitepaper</span>
          </div>
          <Image alt="lineNumberDown" src={lineNumberDown} />
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
    "@media screen and (max-width: 1000px)": {
      fontSize: 36,
      margin: {
        left: 0,
        right: 0,
      },
    },
  },
  info: {
    display: "flex",
    flexDirection: "column",
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
  },
  playRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: {
      left: 100,
      right: 100,
    },
    marginBottom: 30,
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
    marginTop: 100,
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
    right: 518,
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
    left: 535,
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
    right: 518,
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
    left: 534,
    top: 184,
  },
  infoS: {
    "@media screen and (max-width: 1000px)": {
      width: "90%",
      padding: {
        left: 16,
        right: 16,
      },
    },
    "@media screen and (min-width: 1000px)": {
      display: "none",
    },
  },
  rowS: {
    "@media screen and (max-width: 1000px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 65,
      position: "relative",
    },
  },
  rowTitleS: {
    "@media screen and (max-width: 1000px)": {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.whiteWithOpacity,
      marginBottom: 8,
      marginTop: 16,
    },
  },
  rowDescS: {
    "@media screen and (max-width: 1000px)": {
      fontSize: 16,
      textAlign: "center",
      color: colors.textPurpleWithOpacity,
      marginBottom: 24,
    },
  },
  lastRowTitleS: {
    "@media screen and (max-width: 1000px)": {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.whiteWithOpacity,
      marginBottom: 24,
    },
  },
  playCardS: {
    "@media screen and (min-width: 1000px)": {
      display: "none",
    },
  },
  lineNumber: {
    position: "absolute",
    top: 18,
    color: colors.whiteWithOpacity,
    fontSize: 30,
    textShadow: "0px 0px 8px rgba(255, 188, 255, 1)",
  },
});
