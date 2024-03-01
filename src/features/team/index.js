import React from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import Link from "next/link";
import colors from "@/styles/colors";
import lineWithCircle from "@/public/images/line-with-circle.webp";
import leftBracket from "@/public/images/left-bracket.webp";
import rightBracket from "@/public/images/right-bracket.webp";
import avatar1 from "../../../public/images/avatar1.webp";
import avatar2 from "../../../public/images/avatar2.webp";

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
        <Image src={lineWithCircle} alt="lineWithCircle" loading="lazy" />
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
              width={245}
              height={263}
              loading="lazy"
            />
            <div className={classes.listItemInfo}>
              <Image
                alt="leftBracket"
                src={leftBracket}
                objectFit="cover"
                quality={100}
                loading="lazy"
              />
              <div className={classes.listItemContact}>
                <span>{temp.name}</span>
                <Link
                  href={temp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  {temp.socialMedia}
                </Link>
              </div>
              <Image
                alt="rightBracket"
                src={rightBracket}
                objectFit="cover"
                quality={100}
                loading="lazy"
              />
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
    paddingBottom: 300,
    alignItems: "center",
    justifyItems: "center",
    padding: {
      right: 200,
      left: 200,
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
    fontSize: 52,
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
      left: 5,
      top: 10,
      bottom: 10,
      right: 5,
    },
    "& span": {
      fontSize: 22,
      fontWeight: "bold",
      "@media screen and (max-width: 600px)": {
        fontSize: 24,
      },
    },
    "& a": {
      fontSize: 20,
      "@media screen and (max-width: 600px)": {
        fontSize: 18,
      },
    },
  },
});
