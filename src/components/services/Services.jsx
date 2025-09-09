import Counter from "./Counter";
import { motion, useInView } from "motion/react";
import "./services.css";
import { useRef, useState } from "react";

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Solution Architecture",
    counter: 60,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Machine Learning",
    counter: 96,
  },
];

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const serviceImageVariant = {
  animate: {
    rotateY: [0, 360],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
export const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);

  const ref = useRef();
  const IsinView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate={IsinView ? "animate" : "initial"}
          className="sTitle"
        >
          How can I help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          initial="initial"
          animate={IsinView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text="Projects Completed" />
          <Counter from={0} to={72} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <motion.img
            variants={serviceImageVariant}
            animate={IsinView ? "animate" : "initial"}
            src="/laptop-Photoroom.png"
            alt="laptop"
          />
        ) : currentServiceId === 2 ? (
          <motion.img
            variants={serviceImageVariant}
            animate={IsinView ? "animate" : "initial"}
            src="/solutions-Photoroom.png"
            alt="laptop"
          />
        ) : (
          <motion.img
            variants={serviceImageVariant}
            animate={IsinView ? "animate" : "initial"}
            src="/roboot-Photoroom.png"
            alt="laptop"
          />
        )}
      </div>
    </div>
  );
};
