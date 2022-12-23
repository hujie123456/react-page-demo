import classNames from "classnames";
import * as React from "react";
import { CSSTransition } from "react-transition-group";
import type { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import "./style.scss";

type Props = {};

const CSSFade = (props: Props) => {
  const nodeRef = React.useRef(null);
  const [show, setShow] = React.useState(false);
  //   const cls: CSSTransitionClassNames = {
  //     enter: "opacity-0",
  //     enterActive: "opacity-100 transition-opacity duration-20000",
  //     exit: "opacity-100",
  //     exitActive: "opacity-0 transition-opacity duration-20000",
  //   };

  return (
    <>
      <CSSTransition in={show} timeout={2000} nodeRef={nodeRef} classNames={"my-node"} unmountOnExit>
        <div ref={nodeRef}>CSSTransition</div>
      </CSSTransition>
      <button onClick={() => setShow((show) => !show)}>CSS</button>
    </>
  );
};

export default CSSFade;
