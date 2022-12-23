import { useMemoizedFn, useToggle } from "ahooks";
import { CSSProperties, useState } from "react";
import { createPortal } from "react-dom";
import Drawer from "@/components/drawer";
import SearchModal from "./components/searchModal";
import Layout from "./layout";
import * as React from "react";
import { CSSTransition, Transition } from "react-transition-group";
import Fade from "./demo/Transition";
import CSSFade from "./demo/CSSTransition";

function App() {
  const [visible, { toggle, setLeft }] = useToggle();
  const [state, setState] = React.useState(false);
  const nodeRef = React.useRef(null);
  const bodyDom = document.querySelector("body")!;

  // React.useEffect(() => {
  //   // setState("123");
  // }, [visible]);

  return (
    <div className="App">
      <Layout />
      {/* <div
        onClick={() => {
          toggle();
        }}
      >
        确认
      </div> */}
      {/* <Drawer visible={visible} onClose={() => setLeft()} /> */}
      {/* <button onClick={() => setState((state) => !state)}>dis</button>
      <div className="w-200px h-2px bg-black transform rotate-45"></div> */}
      {/* {createPortal(<SearchModal visible={visible} />, bodyDom)} */}
      {/* <Fade /> */}
      {/* <CSSFade /> */}
    </div>
  );
}

export default App;
