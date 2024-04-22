/// <reference types="@incubateur-ademe/legal-pages-markdown/html" />

import { type PrivacyPolicyProps } from "@incubateur-ademe/legal-pages-markdown";
import PrivacyPolicyHtml from "@incubateur-ademe/legal-pages-markdown/html/PrivacyPolicy.html?raw";
import PrivacyPolicy_withBetaHtml from "@incubateur-ademe/legal-pages-markdown/html/PrivacyPolicy_withBeta.html?raw";
import { useId } from "react";

import { ClientOnly } from "./ClientOnly";
import { ClientPortal } from "./ClientPortal";
import { htmlParser } from "./htmlParser";

export const PrivacyPolicy = ({
  date = "12/03/2024",
  includeBetaGouv = false,
  cookieConsentButton,
  siteName,
}: PrivacyPolicyProps<React.ReactNode>) => {
  const buttonPortalId = useId();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: htmlParser(includeBetaGouv ? PrivacyPolicy_withBetaHtml : PrivacyPolicyHtml, {
            date,
            includeBetaGouv,
            siteName,
            cookieConsentButton: `<span id="${buttonPortalId}"></span>`,
          }),
        }}
      />
      <ClientOnly>
        <ClientPortal childrenId={buttonPortalId}>{cookieConsentButton}</ClientPortal>
      </ClientOnly>
    </>
  );
};
