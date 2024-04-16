"use client";

import { type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface ClientPortalProps {
  childrenId: string;
}
export const ClientPortal = ({ childrenId, children }: PropsWithChildren<ClientPortalProps>) => {
  return createPortal(children, document.getElementById(childrenId) as HTMLElement);
};
