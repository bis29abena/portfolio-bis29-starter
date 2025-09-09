import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";

const awardVariance = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariance = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There, <br /> <span>I'm Bismark</span>
        </motion.h1>
        <motion.div
          variants={awardVariance}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariance}>Top Rated Designer</motion.h2>
          <motion.p variants={awardVariance}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </motion.p>
          <motion.div variants={awardVariance} className="awardList">
            <motion.img
              variants={awardVariance}
              src="/award1.png"
              alt="award1"
            />
            <motion.img
              variants={awardVariance}
              src="/award2.png"
              alt="award2"
            />
            <motion.img
              variants={awardVariance}
              src="/award3.png"
              alt="award3"
            />
          </motion.div>
        </motion.div>

        {/* Scroll SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="hSection right">
        {/* FOLLOW COMPONENT */}
        <motion.div
          variants={followVariance}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariance} href="/">
            <img src="/instagram.png" alt="instagram" />
          </motion.a>
          <motion.a variants={followVariance} href="/">
            <img src="/youtube.png" alt="youtube" />
          </motion.a>
          <motion.a variants={followVariance} href="/">
            <img src="/facebook.png" alt="facebook" />
          </motion.a>
          <motion.div variants={followVariance} className="followTextContainer">
            <motion.div variants={followVariance} className="followText">
              FOLLOW ME
            </motion.div>
          </motion.div>
        </motion.div>
        {/*BUBBLE */}
        <Speech />
        {/*CERIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/certificate.png" alt="certificate" />
          CDA Certified <br />
          PROFESSIONAL <br />
          BACKEND DEVELOPER <br />
        </motion.div>
        {/*CONTACT */}
        <motion.a
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          href="#contact"
          className="contactLink"
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/*3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="himg">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};
