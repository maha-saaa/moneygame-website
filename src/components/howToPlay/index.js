import React from "react";
import { createUseStyles } from "react-jss";
import { m } from "framer-motion";
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
import playCardOneS from "@/public/images/play-card-one-s.png";
import playCardTwoS from "@/public/images/play-card-two-s.png";
import playCardThreeS from "@/public/images/play-card-three-s.png";
import playCardFourS from "@/public/images/play-card-four-s.png";
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
        </div>
        <div className={classes.playRow}>
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
          <m.div
            className="notched-rectengle-button-2"
            whileHover={{
              scale: 1.1,
            }}
          >
            <span>Whitepaper</span>
          </m.div>
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
          <Image alt="playCardOneS" src={playCardOneS} />
        </div>
        <div className={classes.rowS}>
          <span className={classes.lineNumber}>2</span>
          <Image alt="lineNumberUpS" src={lineNumberUpS} />
          <span className={classes.rowTitleS}>Determination</span>
          <span className={classes.rowDescS}>
            {`Using Smart Contracts your pass is\n determined as a winner or loser. 
                We can’t change this or know who the\n winners are.`}
          </span>
          <Image alt="playCardTwoS" src={playCardTwoS} />
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
          <Image alt="playCardThreeS" src={playCardThreeS} />
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
          <Image alt="playCardFourS" src={playCardFourS} />
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
          <m.div
            className="notched-rectengle-button-2"
            whileHover={{
              scale: 1.1,
            }}
          >
            <span>Whitepaper</span>
          </m.div>
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
    marginBottom: 300,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 123,
    alignItems: "center",
  },
  title: {
    fontSize: 52,
    fontStyle: "italic",
    fontWeight: "bold",
    color: colors.whiteWithOpacity,
    textShadow: "0px 9px 9px rgba(208, 198, 247, 0.6)",
    textAlign: "center",
    margin: {
      left: 40,
      right: 40,
    },
    "@media screen and (max-width: 1200px)": {
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
    "@media screen and (max-width: 1200px)": {
      display: "none",
    },
  },
  playRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: {
      left: 100,
      right: 100,
    },
    marginBottom: 100,
    position: "relative",
  },
  playCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: {
      left: 200,
      right: 200,
    },
    marginTop: 100,
  },
  playTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.whiteWithOpacity,
  },
  playDesc: {
    fontSize: 18,
    color: colors.textPurpleWithOpacity,
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
  infoS: {
    "@media screen and (max-width: 1200px)": {
      width: "90%",
      padding: {
        left: 16,
        right: 16,
      },
    },
    "@media screen and (min-width: 1200px)": {
      display: "none",
    },
  },
  rowS: {
    "@media screen and (max-width: 1200px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 65,
      position: "relative",
    },
  },
  rowTitleS: {
    "@media screen and (max-width: 1200px)": {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.whiteWithOpacity,
      marginBottom: 8,
      marginTop: 16,
    },
  },
  rowDescS: {
    "@media screen and (max-width: 1200px)": {
      fontSize: 16,
      textAlign: "center",
      color: colors.textPurpleWithOpacity,
      marginBottom: 24,
    },
  },
  lastRowTitleS: {
    "@media screen and (max-width: 1200px)": {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.whiteWithOpacity,
      marginBottom: 24,
    },
  },
  playCardS: {
    "@media screen and (min-width: 1200px)": {
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
