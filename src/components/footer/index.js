import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import HorizontalLine from "@/public/images/horizontal-line.svg";

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footerContainer}>
      <HorizontalLine />
      <div className={classes.contact}>
        {/* <span
          className={classes.title}
          data-scroll
          data-scroll-repeat
          // data-scroll-speed="2"
          // data-scroll-direction="vertical"
        >{`PARTNERSHIPS & COLLABS`}</span> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="5"
          >
            P
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.095"
            data-scroll-speed="5"
          >
            A
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.085"
            data-scroll-speed="5"
          >
            R
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.075"
            data-scroll-speed="5"
          >
            T
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.065"
            data-scroll-speed="5"
          >
            N
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.055"
            data-scroll-speed="5"
          >
            E
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.045"
            data-scroll-speed="5"
          >
            R
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.035"
            data-scroll-speed="5"
          >
            S
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.035"
            data-scroll-speed="5"
          >
            H
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.045"
            data-scroll-speed="5"
          >
            I
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.055"
            data-scroll-speed="5"
          >
            P
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.065"
            data-scroll-speed="5"
          >{`\u00A0&\u00A0`}</span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.075"
            data-scroll-speed="5"
          >
            C
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.085"
            data-scroll-speed="5"
          >
            O
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.095"
            data-scroll-speed="5"
          >
            L
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="5"
          >
            L
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.25"
            data-scroll-speed="5"
          >
            A
          </span>
          <span
            className={classes.title}
            data-scroll
            data-scroll-delay="0.35"
            data-scroll-speed="5"
          >
            B
          </span>
        </div>

        <span
          className={classes.desc}
        >{`Have an idea? We’d love to hear it.`}</span>
        <div className="notched-rectengle-button">
          <span style={{ color: colors.textPurple }}>Reach out to Us</span>
        </div>
      </div>
      <HorizontalLine />
      <span className={classes.bottomText}>A PROJECT BY FND</span>
    </footer>
  );
}

const useStyles = createUseStyles({
  footerContainer: {
    backgroundColor: colors.background,
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  contact: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: {
      top: 60,
      bottom: 60,
    },
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors.whiteWithOpacity,
    textShadow: "0px 9px 9px rgba(208, 198, 247, 0.6)",
    textAlign: "center",
    marginBottom: 33,
    "@media screen and (max-width: 1000px)": {
      fontSize: 36,
      marginBottom: 27,
    },
  },
  desc: {
    fontSize: 24,
    color: colors.textPurpleWithOpacity,
    textAlign: "center",
    marginBottom: 52,
    "@media screen and (max-width: 1000px)": {
      fontSize: 20,
      marginBottom: 48,
    },
  },
  bottomText: {
    color: colors.textPurple,
    textAlign: "center",
    marginTop: 118,
  },
});
