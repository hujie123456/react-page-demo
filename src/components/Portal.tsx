import { createPortal } from "react-dom";
import type { ReactNode } from "react";

interface PortalProps {
  children: ReactNode;
  container?: Element | DocumentFragment;
}

const Portal = (props: PortalProps) => {
  const { children, container = document.body } = props;

  return <>{createPortal(children, container)}</>;
};

export default Portal;
