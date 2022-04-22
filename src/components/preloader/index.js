import { createUseStyles } from "react-jss";
import Image from "next/image";
import { motion } from "framer-motion";
import colors from "@/styles/colors";
import bgGlass from "@/public/images/bg-glass.png";
import yellowRay1 from "@/public/images/yellow-ray-1.png";
import yellowRay2 from "@/public/images/yellow-ray-2.png";
import yellowRay3 from "@/public/images/yellow-ray-3.png";
import purpleLight from "@/public/images/purple-light.png";

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
      <motion.div
        className={classes.purpleLightWrapper}
        initial={{
          x: -500,
        }}
        animate={{
          x: -300,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 1,
          duration: 10,
        }}
      >
        <Image
          alt="purpleLight"
          src={purpleLight}
          objectFit="contain"
          layout="fill"
        />
      </motion.div>
      <motion.div
        className={classes.yellowRay1Wrapper}
        initial={{
          x: 0,
        }}
        animate={{
          x: 100,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 1,
          duration: 10,
        }}
      >
        <Image
          alt="yellowRay1"
          src={yellowRay1}
          objectFit="contain"
          layout="fill"
        />
      </motion.div>
      <motion.div
        className={classes.yellowRay2Wrapper}
        initial={{
          x: 0,
        }}
        animate={{
          x: 100,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 1,
          duration: 5,
        }}
      >
        <Image
          alt="yellowRay2"
          src={yellowRay2}
          objectFit="contain"
          layout="fill"
        />
      </motion.div>
      <motion.div
        className={classes.yellowRay3Wrapper}
        initial={{
          x: 0,
        }}
        animate={{
          x: 100,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 1,
          duration: 10,
        }}
      >
        <Image
          alt="yellowRay3"
          src={yellowRay3}
          objectFit="contain"
          layout="fill"
        />
      </motion.div>
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
      fontSize: 34,
    },
  },
  yellowRay1Wrapper: {
    position: "absolute",
    top: -7,
    left: 0,
    height: 712,
    width: 496,
    "@media screen and (max-width: 1000px)": {
      height: 300,
      width: 233,
    },
  },
  yellowRay2Wrapper: {
    position: "absolute",
    top: -7,
    left: 0,
    height: 604,
    width: 346,
    "@media screen and (max-width: 1000px)": {
      height: 300,
      width: 233,
    },
  },
  yellowRay3Wrapper: {
    position: "absolute",
    top: -7,
    left: -103,
    height: 604,
    width: 398,
    "@media screen and (max-width: 1000px)": {
      height: 300,
      width: 233,
    },
  },
  purpleLightWrapper: {
    position: "absolute",
    top: -7,
    left: 0,
    height: 852,
    width: 1322,
    "@media screen and (max-width: 1000px)": {
      display: "none",
    },
  },
});
