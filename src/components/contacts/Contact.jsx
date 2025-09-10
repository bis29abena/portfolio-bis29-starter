import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import "./contact.css";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const form = useRef();
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-200px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setErr(false);
        },
        (error) => {
          setErr(true);
          setSuccess(false);
        }
      );
  };

  const previewCV = () => {
    window.open("/cv.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact" ref={ref}>
      <div className="cSection left">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's Keep In Touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input
              type="text"
              name="username"
              placeholder="John Kofi"
              required
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="useremail"
              placeholder="kofi@gmail.com"
              required
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              placeholder="Write your message"
              name="message"
              required
            ></textarea>
          </motion.div>
          <motion.div variants={listVariant} className="formButtons">
            <button
              type="button"
              className="formButton sendButton"
              onClick={sendEmail}
            >
              Send
            </button>
            <button className="formButton downloadButton" onClick={previewCV}>
              Download CV
            </button>
          </motion.div>
          {success && <span>Your message has been sent</span>}
          {err && <span>Something Went Wrong!!!</span>}
        </motion.form>
      </div>
      <div className="cSection right">
        <ContactSvg />
      </div>
    </div>
  );
};
