import { useInView, animate } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

function Counter({ from, to, text }) {
  const [count, setCount] = useState(from);

  const ref = useRef();
  const IsInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (prevValue) => {
        setCount(Math.floor(prevValue));
      },
    });

    return () => animation.cancel();
  }, [IsInView, from, to]);

  return (
    <div className="counter" ref={ref}>
      <h1>{count}+</h1>
      <p>{text}</p>
    </div>
  );
}

export default Counter;
