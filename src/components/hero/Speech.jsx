import { TypeAnimation } from "react-type-animation";

function Speech() {
  return (
    <div className="bubbleContainer">
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "Same substring at the start will only be typed out once, initially",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="man" srcset="" />
    </div>
  );
}

export default Speech;
