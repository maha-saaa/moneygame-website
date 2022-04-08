import { useState } from "react";
import { createUseStyles } from "react-jss";
import { m } from "framer-motion";
import colors from "@/styles/colors";
import ArrowUp from "@/public/images/arrow-up.svg";
import ArrowDown from "@/public/images/arrow-down.svg";

const Accordion = ({ question, answer }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <m.div
      key="question"
      className="notched-rectengle-card"
      onClick={() => setIsOpen(!isOpen)}
    >
      <m.div style={{ display: "flex", flexDirection: "row" }}>
        <m.div className={classes.question}>{question}</m.div>
        {!isOpen ? (
          <ArrowDown className={classes.arrow} />
        ) : (
          <ArrowUp className={classes.arrow} />
        )}
      </m.div>
      {isOpen && (
        <m.div
          className={classes.answer}
          key="answer"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {answer}
        </m.div>
      )}
    </m.div>
  );
};

export default Accordion;

const useStyles = createUseStyles({
  question: {
    fontSize: 28,
    color: colors.whiteWithOpacity,
    display: "flex",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  answer: {
    fontSize: 20,
    color: colors.whiteWithOpacity,
    display: "flex",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginTop: 22,
  },
  arrow: {
    marginLeft: "auto",
  },
});
