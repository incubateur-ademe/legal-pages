"use client";

import { type PropsWithChildren, type ReactPortal } from "react";
import { createPortal } from "react-dom";

interface ClientPortalProps {
  childrenId: string;
}
export const ClientPortal = ({ childrenId, children }: PropsWithChildren<ClientPortalProps>): ReactPortal => {
  return createPortal(children, document.getElementById(childrenId) as HTMLElement);
};
