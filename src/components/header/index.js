import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import Logo from "@/public/images/logo.svg";
import OpenSea from "@/public/images/open-sea.svg";
import Twitter from "@/public/images/twitter.svg";
import Discord from "@/public/images/discord.svg";

const navbarMenu = [
  {
    key: "#section-Home",
    title: "Home",
  },
  {
    key: "#section-Whitepaper",
    title: "Whitepaper",
  },
  {
    key: "#section-Blog",
    title: "Blog",
  },
  {
    key: "#section-Wishlist",
    title: "Wishlist",
  },
];

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.headerContainer}>
      <div className={classes.menu}>
        <ul>
          {navbarMenu?.map((temp) => (
            <li key={temp.key}>
              <a href={temp.key}>{temp.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.logo}>
        <Logo />
      </div>

      <div className={classes.access}>
        <ul>
          <li>
            <a href={"./"}>
              <OpenSea />
            </a>
          </li>
          <li>
            <a href={"./"}>
              <Twitter />
            </a>
          </li>
          <li>
            <a href={"./"}>
              <Discord />
            </a>
          </li>
          <li>
            <div className="notched-rectengle-button">
              <span>Connect Wallet</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

const useStyles = createUseStyles({
  headerContainer: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "row",
    color: colors.textPurple,
    alignItems: "center",
    minHeight: 80,
    justifyContent: "space-between",
    padding: {
      right: 111,
      left: 111,
    },
    zIndex: 1000,
    "@media screen and (max-width: 1000px)": {
      padding: {
        right: 16,
        left: 16,
      },
    },
    // position: "sticky",
    // top: 0,
  },
  menu: {
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
    display: "flex",
    flex: 1,
    "& ul": {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      "& li": {
        listStyle: "none",
        marginRight: 24,
        listStyleType: "none",
        display: "list-item",
        "& a": {
          textDecoration: "none",
          color: colors.text,
          "&:hover": {
            color: colors.white,
          },
        },
      },
    },
  },
  logo: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    margin: {
      left: 50,
      right: 50,
    },
  },
  access: {
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& ul": {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      "& li": {
        listStyle: "none",
        marginRight: 24,
        listStyleType: "none",
        display: "list-item",
        "& a": {
          textDecoration: "none",
          color: colors.text,
        },
      },
    },
  },
});
