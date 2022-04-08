import React from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import Link from "next/link";
import colors from "@/styles/colors";
import LineStraight from "@/public/images/line-straight.svg";
import LeftBracket from "@/public/images/left-bracket-long.svg";
import RightBracket from "@/public/images/right-bracket-long.svg";
import avatar1 from "../../../public/images/avatar1.png";
import avatar2 from "../../../public/images/avatar2.png";

const data = [
  {
    key: 1,
    name: "Derivatives Monke",
    socialMedia: "Twitter",
    url: "false",
    image: avatar1,
  },
  {
    key: 2,
    name: "Derivatives Monke",
    socialMedia: "Twitter",
    image: avatar2,
  },
];

export default function Team() {
  const classes = useStyles();

  return (
    <section className={classes.teamContainer}>
      <div className={classes.header}>
        <span className={classes.title}>TEAM</span>
        <div className="outer-circle-small">
          <div className="inner-circle-small"></div>
        </div>
        <LineStraight />
      </div>
      <div className={classes.list}>
        {data.map((temp) => (
          <div key={temp.key} className={classes.listItem}>
            <Image
              alt="Mountains"
              src={temp.image}
              objectFit="cover"
              quality={100}
            />
            <div className={classes.listItemInfo}>
              <LeftBracket />
              <div className={classes.listItemContact}>
                <span>{temp.name}</span>
                <Link href="">{temp.socialMedia}</Link>
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
  },
  header: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 107,
    "@media screen and (max-width: 1000px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors.whiteWithOpacity,
    textShadow: "0px 9px 9px rgba(208, 198, 247, 0.6)",
    marginRight: 24,
  },
  list: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItem: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginRight: 50,
    marginLeft: 50,
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
    },
    "& a": {
      fontSize: 28,
    },
  },
});
