import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import Accordion from "@/components/accordion";

const questionsList = [
  {
    key: 1,
    question: "How do I get on the whitelist?",
    answer:
      "2500 Spots will be given away in twitter giveaways, 2500 will be raffled away at a date closer to launch, 2500 will be given to projects we partner with, and the last 2500 we will reveal how to get closer to launch. Any spots not claimed will be public.",
    isOpen: false,
  },
  {
    key: 2,
    question: "What are the economics of the game?",
    answer:
      "10.000 passes will be minted at 0.2 ETH each, bringing the pot to $5,200,000. After our fee each of the 10 winners will be recieving $468,000. If you would like to read the details check out our whitepaper (Links to whitepaper page)",
    isOpen: false,
  },
  {
    key: 3,
    question: "When is the game starting?",
    answer:
      "Mint is happening on the 1st of may 2022, and the burning will start 24 hours later.I am able to add more FAQ as they come right?",
    isOpen: false,
  },
];

export default function Faq() {
  const classes = useStyles();

  return (
    <section className={classes.faqContainer}>
      <span className={classes.title}>F.A.Q</span>
      {questionsList?.map((temp) => (
        <Accordion
          question={temp.question}
          answer={temp.answer}
          key={temp.key}
        />
      ))}
    </section>
  );
}

const useStyles = createUseStyles({
  faqContainer: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 312,
    "@media screen and (max-width: 600px)": {
      paddingBottom: 173,
    },
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors.whiteWithOpacity,
    textAlign: "center",
    marginBottom: 74,
    "@media screen and (max-width: 600px)": {
      fontSize: 35,
      marginBottom: 46,
    },
  },
});
