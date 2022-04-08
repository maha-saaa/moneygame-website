import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import Accordion from "@/components/accordion";

const questionsList = [
  {
    key: 1,
    question: "How can I play?",
    answer: "answer",
    isOpen: false,
  },
  {
    key: 2,
    question: "How do I get on the whitelist?",
    answer: "answer",
    isOpen: false,
  },
  {
    key: 3,
    question: "What is mint price?",
    answer: "answer",
    isOpen: false,
  },
  {
    key: 4,
    question: "What is the mint date?",
    answer: "answer",
    isOpen: false,
  },
  {
    key: 5,
    question: "How can I play?",
    answer: "answer",
    isOpen: false,
  },
];

export default function Faq() {
  const classes = useStyles();

  return (
    <div className={classes.faqContainer}>
      <span className={classes.title}>F.A.Q</span>
      {questionsList?.map((temp) => (
        <Accordion question={temp.question} answer={temp.answer} />
      ))}
    </div>
  );
}

const useStyles = createUseStyles({
  faqContainer: {
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 312
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors.whiteWithOpacity,
    textAlign: "center",
    marginBottom: 74,
  },
});
