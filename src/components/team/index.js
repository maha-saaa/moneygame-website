import React from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import colors from "@/styles/colors";
import LineLeftCircle from "@/public/images/line-left-circle.svg";
import LeftBracket from "@/public/images/left-bracket.svg";
import RightBracket from "@/public/images/right-bracket.svg";

const data = [
  {
    key: 1,
    name: "Jack Addams",
    socialMedia: "Twitter",
    url: "false",
  },
  {
    key: 2,
    name: "Jack Addams",
    socialMedia: "Twitter",
    url: "false",
  },
];

export default function Team() {
  const classes = useStyles();

  return (
    <section className={classes.teamContainer}>
      <div className={classes.header}>
        <span className={classes.title}>TEAM</span>
        <LineLeftCircle />
      </div>
      <div className={classes.list}>
        {data.map((temp) => (
          <div key={temp.key} className={classes.listItem}>
            {/* <Image
              alt="Mountains"
              src="./"
              layout="fill"
              objectFit="cover"
              quality={100}
            /> */}
            <div className={classes.listItemInfo}>
              <LeftBracket />
              <div className={classes.listItemContact}>
                <span>{temp.name}</span>
                <a>{temp.socialMedia}</a>
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
  },
  listItem: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  listItemInfo: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    marginTop: 35,
  },
  listItemContact: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    color: colors.whiteWithOpacity,
    marginLeft: 15,
    marginRight: 91,
  },
});
