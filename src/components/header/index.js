import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import { motion } from "framer-motion";
import colors from "@/styles/colors";
import logo from "@/public/images/logo.png";
import OpenSea from "@/public/images/open-sea.svg";
import Twitter from "@/public/images/twitter.svg";
import Discord from "@/public/images/discord.svg";
import { injected } from "../../connector/connector";
import { useWeb3React } from "@web3-react/core";

const navbarMenu = [
  {
    key: "./",
    title: "Home",
  },
  {
    key: "#section-Whitepaper",
    title: "Whitepaper",
  },
  {
    key: "#section-Wishlist",
    title: "Whitelist",
  },
];

export default function Header() {
  const classes = useStyles();
  const [hoverConnect, setHoverConnect] = useState(false);
  const {
    account,
    activate,
    active,
    chainId,
    connector,
    deactivate,
    error,
    provider,
    setError,
  } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className={classes.headerContainer}>
      <div className={classes.menu}>
        <ul>
          {navbarMenu?.map((temp, index) => (
            <motion.li
              key={temp.key}
              initial={{ x: -50 }}
              animate={{ x: 10 }}
              transition={{ ease: "easeOut", duration: 1, delay: 0.4 * index }}
            >
              <a href={temp.key}>{temp.title}</a>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className={classes.logo}>
        <Image alt="logo" src={logo} loading="lazy" />
      </div>

      <div className={classes.access}>
        <ul>
          <motion.li
            initial={{ x: 150 }}
            animate={{ x: 10 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0 }}
          >
            <a
              href={"https://opensea.io/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenSea />
            </a>
          </motion.li>
          <motion.li
            initial={{ x: 150 }}
            animate={{ x: 10 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
          >
            <a
              href={"https://twitter.com/Money_GameNFT"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </motion.li>
          <motion.li
            initial={{ x: 150 }}
            animate={{ x: 10 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.8 }}
          >
            <a
              href={"https://discord.gg/PDBjdqYbCe"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord />
            </a>
          </motion.li>
          <li>
            <motion.div
              className="notched-rectengle-button"
              onClick={connect}
              whileHover={{
                scale: 1.1,
              }}
              onMouseEnter={() => setHoverConnect(true)}
              // onMouseLeave={() => setHoverConnect(false)}
            >
              {!active ? (
                <span>Connect Wallet</span>
              ) : (
                <span>{`${account.slice(0, 8)}...`}</span>
              )}
            </motion.div>
            {hoverConnect ? (
              <div className={classes.connectModal}>
                <div onClick={() => setHoverConnect(false)}>
                  <span>close</span>
                </div>

                <div onClick={() => active && disconnect()}>
                  <span>Disconnect</span>
                </div>
              </div>
            ) : null}
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
    color: colors.textPurple,
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
    "@media screen and (max-width: 600px)": {
      margin: 0,
    },
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
      "& li:not(:last-child)": {
        listStyle: "none",
        marginRight: 24,
        listStyleType: "none",
        display: "list-item",
        "@media screen and (max-width: 1000px)": {
          display: "none",
        },
        "& a": {
          textDecoration: "none",
          color: colors.text,
        },
      },
      "& li:last-child": {
        "@media screen and (min-width: 1600px)": {
          marginLeft: 44,
        },
      },
    },
  },
  connectModal: {
    position: "absolute",
    boxSizing: "border-box",
    overflowY: "scroll",
    maxHeight: 150,
    width: 180,
    right: "8%",
    zIndex: 999,
    background: colors.background,
    padding: 10,
    border: "1px solid rgb(189, 181, 222)",
    color: colors.whiteWithOpacity,
    display: "flex",
    flexDirection: "column",
    transform: "translate(0, 10px)",
    "& div": {
      cursor: "pointer",
    },
    "& div:nth-child(1)": {
      alignSelf: "flex-end"
    }
  },
});
