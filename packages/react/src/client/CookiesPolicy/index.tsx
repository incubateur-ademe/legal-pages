"use client";

import { type CookiesPolicyProps } from "@incubateur-ademe/legal-pages-markdown";
import CookiesPolicyHtml from "@incubateur-ademe/legal-pages-markdown/html/CookiesPolicy.html?raw";
import { useId } from "react";

import { cookiesPolicyDefaultProps } from "../../CookiesPolicy";
import { ClientOnly } from "../../utils/ClientOnly";
import { ClientPortal } from "../../utils/ClientPortal";
import { useHtmlParser } from "../useHtmlParser";

export type CookiesPolicyClientProps = Omit<CookiesPolicyProps<React.ReactNode>, "includeBetaGouv">;

export const CookiesPolicyClient = ({
  date = cookiesPolicyDefaultProps.date,
  cookieConsentButton,
  siteName,
  analyticTool = cookiesPolicyDefaultProps.analyticTool,
}: CookiesPolicyClientProps) => {
  const buttonPortalId = useId();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: useHtmlParser(CookiesPolicyHtml, {
            date,
            siteName,
            cookieConsentButton: `<span id="${buttonPortalId}"></span>`,
            analyticTool,
          }),
        }}
      />
      <ClientOnly>
        <ClientPortal childrenId={buttonPortalId}>{cookieConsentButton}</ClientPortal>
      </ClientOnly>
    </>
  );
};

export default CookiesPolicyClient;
