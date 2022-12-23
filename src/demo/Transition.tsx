import * as React from "react";
import type { FC, CSSProperties } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import classNames from "classnames";

const duration = 500;

const defaultStyle: CSSProperties = {
  transition: `opacity ${duration}ms`,
  opacity: 0,
};

const transitionStyle: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade: FC = () => {
  const nodeRef = React.useRef(null);
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Transition nodeRef={nodeRef} in={show} timeout={duration} mountOnEnter>
        {(state) => (
          <div
            className={`opacity-0 transition-opacity duration-500`}
            style={{
              ...transitionStyle[state],
            }}
          >
            Transition
          </div>
        )}
      </Transition>
      <button className="block" onClick={() => setShow((show) => !show)}>
        点击
      </button>
    </>
  );
};

export default Fade;
