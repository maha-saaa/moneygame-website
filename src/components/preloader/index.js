import { createUseStyles } from "react-jss";
import Image from "next/image";
import colors from "@/styles/colors";
import bgGlass from "@/public/images/bg-glass.png";

export default function Preloader() {
  const classes = useStyles();

  return (
    <div className={classes.preLoaderContainer}>
      <Image
        alt="bgGlass"
        src={bgGlass}
        objectFit="cover"
        layout="fill"
        objectPosition="center"
      />
      <span className={classes.title}>A PROJECT BY FND</span>
    </div>
  );
}

const useStyles = createUseStyles({
  preLoaderContainer: {
    backgroundColor: colors.background,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  title: {
    fontSize: 64,
    fontStyle: "italic",
    fontWeight: "bold",
    color: colors.whiteWithOpacity,
    textShadow: "0px 9px 9px rgba(208, 198, 247, 0.6)",
    textAlign: "center",
    margin: {
      top: 10,
      bottom: 10,
    },
    "@media screen and (max-width: 1000px)": {
      fontSize: 64,
    },
  },
});
