import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import Accordion from "@/components/accordion";

const questionsList = [
  {
    key: 1,
    question: "How do I get on the whitelist?",
    answer:
      "2500 Spots will go to twitter giveaways, 2500 will be raffled away, 2500 will be given to projects we partner with, and the last 2500 we will reveal how to get closer to launch. Any spots not claimed will be public.",
    isOpen: false,
  },
  {
    key: 2,
    question: "What are the economics of the game?",
    answer:
      `10.000 passes will be minted at 0.1 ETH each, bringing the pot to $3.000.000. After our fee each of the 10 winners will be recieving $270.000. If you would like to read the details check out our whitepaper`,
    isOpen: false,
  },
  {
    key: 3,
    question: "When is the game starting?",
    answer:
      "Mint is happening on the 1st of June 2022, and the burning will start 24 hours later.",
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
    paddingBottom: 300,
    "@media screen and (max-width: 600px)": {
      paddingBottom: 173,
    },
  },
  title: {
    fontSize: 52,
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
