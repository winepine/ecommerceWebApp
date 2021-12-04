import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import "../styles/signin.css";
import RightHalf from "./RightHalf";
import Signin from "./Signin";
import SignUp from "./Signup";
function LandingPage() {
  const [show, set] = useState(true);
  const transitions = useTransition(show, {
    from: { y: 60, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: -60, opacity: 0 },
    delay: 50,
  });
  useEffect(() => {}, []);
  return (
    <div>
      {transitions((styles, item) => {
        return item ? (
          <animated.div style={styles}>
            <Signin setShow={() => set(!show)} />
          </animated.div>
        ) : (
          <animated.div style={styles}>
            <SignUp setShow={() => set(!show)} />
          </animated.div>
        );
      })}
      <div>{<RightHalf />}</div>
    </div>
  );
}
export default LandingPage;
