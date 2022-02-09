import { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  rootId: string;
  children: ReactNode;
};

export const Portal = ({ rootId, children }: Props) => {
  const root = document.getElementById(rootId) as HTMLElement;
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const current = el.current;
    root!.appendChild(current);
    return () => void root!.removeChild(current);
  }, []);

  return createPortal(children, root);
};
