import React from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import Link from "next/link";
import colors from "@/styles/colors";
import lineWithCircle from "@/public/images/line-with-circle.png";
import LeftBracket from "@/public/images/left-bracket-long.svg";
import RightBracket from "@/public/images/right-bracket-long.svg";
import avatar1 from "../../../public/images/avatar1.png";
import avatar2 from "../../../public/images/avatar2.png";

const data = [
  {
    key: 1,
    name: "Derivatives Monke",
    socialMedia: "Twitter",
    url: "https://twitter.com/Derivatives_Ape",
    image: avatar1,
  },
  {
    key: 2,
    name: "Xation",
    socialMedia: "Twitter",
    url: "https://twitter.com/Xation5",
    image: avatar2,
  },
];

export default function Team() {
  const classes = useStyles();

  return (
    <section className={classes.teamContainer}>
      <div className={classes.header}>
        <span className={classes.title}>TEAM</span>
        <Image src={lineWithCircle} alt="lineWithCircle" />
      </div>
      <div className={classes.list}>
        {data.map((temp) => (
          <div
            key={temp.key}
            className={classes.listItem}
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            <Image
              alt="avatar"
              src={temp.image}
              objectFit="cover"
              quality={100}
            />
            <div className={classes.listItemInfo}>
              <LeftBracket />
              <div className={classes.listItemContact}>
                <span>{temp.name}</span>
                <Link href={temp.url} target="_blank" rel="noopener noreferrer">
                  {temp.socialMedia}
                </Link>
              </div>
              <RightBracket />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const useStyles = createUseStyles({
  teamContainer: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    paddingBottom: 312,
    alignItems: "center",
    justifyItems: "center",
    padding: {
      right: 111,
      left: 111,
    },
    "@media screen and (max-width: 600px)": {
      padding: {
        right: 16,
        left: 16,
        bottom: 134,
      },
    },
  },
  header: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 107,
    width: "100%",
    "@media screen and (max-width: 600px)": {
      marginBottom: 64,
    },
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors.whiteWithOpacity,
    textShadow: "0px 9px 9px rgba(208, 198, 247, 0.6)",
    marginRight: 24,
    "@media screen and (max-width: 600px)": {
      fontSize: 36,
    },
  },
  list: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  listItem: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginRight: 50,
    marginLeft: 50,
    "@media screen and (max-width: 600px)": {
      marginBottom: 60,
    },
  },
  listItemInfo: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    marginTop: 44,
  },
  listItemContact: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    color: colors.whiteWithOpacity,
    margin: {
      left: 15,
      top: 10,
      bottom: 10,
    },
    "& span": {
      fontSize: 34,
      fontWeight: "bold",
      "@media screen and (max-width: 600px)": {
        fontSize: 26,
      },
    },
    "& a": {
      fontSize: 28,
      "@media screen and (max-width: 600px)": {
        fontSize: 18,
      },
    },
  },
});
