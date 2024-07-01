"use client";

import CookiesPolicyWithBetaHtml from "@incubateur-ademe/legal-pages-markdown/html/CookiesPolicy_withBeta.html?raw";
import { useId } from "react";

import { cookiesPolicyDefaultProps } from "../../CookiesPolicy";
import { ClientOnly } from "../../utils/ClientOnly";
import { ClientPortal } from "../../utils/ClientPortal";
import { useHtmlParser } from "../useHtmlParser";
import { type CookiesPolicyClientProps } from ".";

export const CookiesPolicyWithBetaClient = ({
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
          __html: useHtmlParser(CookiesPolicyWithBetaHtml, {
            date,
            siteName,
            cookieConsentButton: `<span id="${buttonPortalId}"></span>`,
            analyticTool,
            includeBetaGouv: true,
          }),
        }}
      />
      <ClientOnly>
        <ClientPortal childrenId={buttonPortalId}>{cookieConsentButton}</ClientPortal>
      </ClientOnly>
    </>
  );
};

export default CookiesPolicyWithBetaClient;
