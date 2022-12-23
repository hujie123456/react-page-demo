import * as React from "react";
import classnames from "classnames";
import Portal from "../Portal";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useFirst } from "@/hooks";
import "./style.scss";
import type { FC } from "react";

export interface DrawerProps {
  children?: React.ReactNode;
  visible?: boolean;
  onClose?: (e?: React.MouseEvent) => void;
}

const prefixCls = "drawer";

const duration = 500;

const Drawer: FC<DrawerProps> = React.memo((props) => {
  const { children, visible, onClose } = props;

  const contentRef = React.useRef<HTMLDivElement>(null);
  const maskRef = React.useRef<HTMLDivElement>(null);

  const first = useFirst(visible!);

  const wrapCls = classnames(
    prefixCls,
    [
      {
        [`${prefixCls}-open`]: visible,
      },
    ],
    "fixed inset-0 z-1000 pointer-events-none"
  );

  const closeMask = (e: React.MouseEvent) => {
    console.log("first");
    if (visible) {
      onClose?.(e);
    }
  };

  return (
    <Portal>
      <div>
        <div className={wrapCls}>
          <CSSTransition nodeRef={maskRef} in={visible} timeout={duration} classNames="mask" unmountOnExit>
            <div
              className={`${prefixCls}-mask absolute inset-0 bg-black bg-opacity-50 z-1000 w-full h-full pointer-events-auto`}
              ref={maskRef}
              onClick={(e) => closeMask(e)}
            ></div>
          </CSSTransition>
          <CSSTransition nodeRef={contentRef} in={visible} timeout={duration} classNames="content" unmountOnExit>
            <div
              className={`${prefixCls}-content-wrap w-100 absolute right-0 h-full bg-white z-1000 pointer-events-auto`}
              ref={contentRef}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </CSSTransition>
        </div>
      </div>
    </Portal>
  );
});

export default Drawer;
