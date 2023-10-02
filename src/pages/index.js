import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useSpring, animated } from "react-spring";

import React from "react";
// import AnimatedNumbers from "react-animated-numbers";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export default function Home() {
  const [num, setNum] = React.useState(331231);

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Number n={100} />
        </div>

        <div className={styles.center}>
          <hr />
          <hr />
        </div>

        <div className={styles.grid}>
          <div className="container">
            <AnimatedNumbers
              includeComma
              animateToNumber={num}
              fontStyle={{ fontSize: 40 }}
              locale="en-US"
              configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
                { mass: 1, tension: 210, friction: 180 },
              ]}
            ></AnimatedNumbers>
            <hr />
            <hr />
            <AnimatedNumbers
              animateToNumber={num}
              fontStyle={{ fontSize: 32 }}
              configs={(number, index) => {
                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
              }}
            ></AnimatedNumbers>
            <div>
              <button onClick={() => setNum((state) => state + 31234)}>
                +
              </button>
              <button onClick={() => setNum((state) => state - 31234)}>
                -
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
