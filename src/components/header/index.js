import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import MoneyGame from "@/public/images/money-game.svg";
import Boat from "@/public/images/boat.svg";
import Twitter from "@/public/images/twitter.svg";
import Discord from "@/public/images/discord.svg";
import ConnectWalletBtn from "@/public/images/connect-wallet-btn.svg";
import HorizontalLine from "@/public/images/horizontal-line.svg";

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
    <header className={classes.container}>
      <section className={classes.menu}>
        <ul>
          {navbarMenu?.map((temp) => (
            <li key={temp.key}>
              <a href={temp.key}>{temp.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className={classes.logo}>
        <MoneyGame />
      </section>

      <section className={classes.access}>
        <ul>
          <li>
            <a href={"./"}>
              <Boat />
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
            <ConnectWalletBtn />
          </li>
        </ul>
      </section>
      {/* <HorizontalLine /> */}
    </header>
  );
}

const useStyles = createUseStyles({
  container: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "row",
    color: colors.lightPurple,
    alignItems: "center",
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
    // "@media screen and (max-width: 1000px)": {
    //   display: "none",
    // },
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
  },
  access: {
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
          "&:hover": {
            color: colors.white,
          },
        },
      },
    },
  },
});
