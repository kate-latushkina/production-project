import { type ReactPortal, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode
  element?: HTMLElement
}

const Portal = (props: PortalProps): ReactPortal => {
  const {
    children,
    element = document.body
  } = props;

  return createPortal(children, element);
};

export default Portal;
