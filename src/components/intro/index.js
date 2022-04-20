import React from "react";
import { createUseStyles } from "react-jss";
import { m } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Image from "next/image";
import colors from "@/styles/colors";
import leftBracket from "@/public/images/left-bracket.png";
import rightBracket from "@/public/images/right-bracket.png";
import bgGlass from "@/public/images/bg-glass.png";
import ButtonBracket from "@/public/images/button-bracket.svg";
import frames from "../../../public/images/frames.png";
import { defaultTransition } from "@/utils/transitions";

export default function Intro() {
  const classes = useStyles();
  const { scroll } = useLocomotiveScroll();

  const goToSection = (event) => {
    event.preventDefault();
    scroll?.scrollTo("#howToPlay");
  };

  return (
    <section className={classes.introContainer}>
      <Image
        alt="bgGlass"
        src={bgGlass}
        objectFit="cover"
        layout="fill"
        objectPosition="center"
        priority
      />
      <Image
        alt="cards"
        src={frames}
        objectFit="cover"
        quality={100}
        unoptimized
      />
      <div className={classes.info}>
        <div className={classes.leftSec}>
          <div onClick={goToSection} className={classes.timeLineBtn}>
            <ButtonBracket />
          </div>
        </div>
        <div className={classes.centerSec}>
          <div>
            <span>Current Prize Pool</span>
          </div>
          <m.span
            className={classes.textWithShadow}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ...defaultTransition,
                delay: 0.3,
              },
            }}
          >
            $3,000,000
          </m.span>
          <div>
            <Image
              alt="leftBracket"
              src={leftBracket}
              objectFit="cover"
              quality={100}
              height={53}
              width={12}
            />
            <span>10 winners</span>
            <Image
              alt="rightBracket"
              src={rightBracket}
              objectFit="cover"
              quality={100}
              height={53}
              width={12}
            />
          </div>
          <m.div
            className="notched-rectengle-button-2"
            whileHover={{
              scale: 1.1,
            }}
          >
            <span>MINT</span>
          </m.div>
        </div>
        <div className={classes.rightSec}>
          <div className={classes.rightSecTextContainer}>
            <span className={classes.rightSecTitle}>SOLD OUT?</span>
            <span className={classes.rightSecDesc}>
              You can still buy on secondary markets to participate in the game
              and game theory!
            </span>
          </div>
          <div className={classes.rightSecTextContainer}>
            <span className={classes.rightSecTitle}>Price?</span>
            <span className={classes.rightSecDesc}>0.2 ETH each</span>
            <span className={classes.rightSecTitle}>Supply?</span>
            <span className={classes.rightSecDesc}>10,000</span>
            <span>Press mint for more info</span>
          </div>
        </div>
        <div onClick={goToSection} className={classes.timeLineBtnSmallScreen}>
          <ButtonBracket />
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
    marginBottom: 300,
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
    "@media screen and (max-width: 1200px)": {
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
  timeLineBtnSmallScreen: {
    zIndex: 1,
    cursor: "pointer",
    marginTop: 41,
    "@media screen and (min-width: 1200px)": {
      display: "none",
    },
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },
  timeLineBtn: {
    zIndex: 1,
    cursor: "pointer",
    "@media screen and (max-width: 1200px)": {
      display: "none",
    },
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
        "@media screen and (max-width: 1000px)": {
          fontSize: 20,
        },
      },
    },

    "& div:nth-child(3)": {
      display: "flex",
      flexDirection: "row",
      justifyItems: "center",
      alignItems: "center",
      marginBottom: 18,
      "& span": {
        fontSize: 20,
        fontWeight: "bold",
        "@media screen and (max-width: 1000px)": {
          fontSize: 16,
        },
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
    "@media screen and (max-width: 1000px)": {
      fontSize: 64,
    },
  },
  rightSec: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginLeft: 40,
    "@media screen and (max-width: 1200px)": {
      flexDirection: "row",
      marginLeft: 0,
      marginTop: 130,
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& div:nth-child(1)": {
      "@media screen and (max-width: 1200px)": {
        marginRight: 51,
      },
    },
  },
  rightSecTextContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& span:nth-child(5)": {
      fontSize: 14,
      fontWeight: "bold",
      "@media screen and (min-width: 1600px)": {
        fontSize: 16,
      },
    },
  },
  rightSecTitle: {
    fontSize: 14,
    marginBottom: 5,
    "@media screen and (min-width: 1600px)": {
      fontSize: 16,
    },
  },
  rightSecDesc: {
    fontSize: 14,
    color: colors.textPurpleWithOpacity,
    marginBottom: 20,
    "@media screen and (min-width: 1600px)": {
      fontSize: 16,
    },
  },
});
