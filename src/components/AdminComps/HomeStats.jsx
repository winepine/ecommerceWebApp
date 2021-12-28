import "../../styles/signin.css";
import { useState } from "react";
import { animated, config, useSpring, useTransition } from "react-spring";
const HomeStats = () => {
  const springAnim = useSpring({
    val: 7690,
    from: { val: 0 },
    config: config.molasses,
  });
  const springAnim2 = useSpring({
    val: 67,
    from: { val: 0 },
    config: config.molasses,
  });
  const springAnim3 = useSpring({
    val: 567094,
    from: { val: 0 },
    config: config.molasses,
  });
  const [show, set] = useState(true);
  const transitions = useTransition(show, {
    from: { y: 60, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: -60, opacity: 0 },
    delay: 150,
  });
  const transitions2 = useTransition(show, {
    from: { y: -60, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 60, opacity: 0 },
    delay: 150,
  });
  return (
    <div className="mainHeader">
      <h1>Home Page</h1>
      <div className="stats">
        {transitions((styles, item) => {
          return (
            <animated.div style={styles} className="usercount">
              <h2
                style={{
                  fontFamily: "poppos",
                  fontSize: "3rem",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "2px",
                  textAlign: "right",
                  marginRight: "2rem",
                  marginTop: "1rem",
                }}
              >
                User Count
              </h2>
              <animated.h1
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textAlign: "right",
                  marginRight: "2rem",
                  marginTop: "1rem",
                }}
              >
                {springAnim2.val.to(val => Math.floor(val))}
              </animated.h1>
            </animated.div>
          );
        })}
        {transitions((styles, item) => {
          return (
            <animated.div style={styles} className="totalorder">
              <h2
                style={{
                  fontFamily: "poppos",
                  fontSize: "3rem",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "2px",
                  textAlign: "right",
                  marginRight: "2rem",
                  marginTop: "1rem",
                }}
              >
                Total Orders
              </h2>
              <animated.h1
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textAlign: "right",
                  marginRight: "2rem",
                  marginTop: "1rem",
                }}
              >
                {springAnim.val.to(val => Math.floor(val))}
              </animated.h1>
            </animated.div>
          );
        })}
        {transitions2((styles, item) => {
          return (
            <animated.div style={styles} className="placeholdering">
              <h2
                style={{
                  fontFamily: "poppos",
                  fontSize: "4rem",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "1px",
                  textAlign: "left",
                  marginLeft: "2rem",
                  marginTop: "1rem",
                }}
              >
                Total Products In Stock
              </h2>
              <animated.h1
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textAlign: "right",
                  marginRight: "2rem",
                }}
              >
                {springAnim3.val.to(val => Math.floor(val))}
              </animated.h1>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};
export default HomeStats;
