"use client";

import { type PrivacyPolicyProps } from "@incubateur-ademe/legal-pages-markdown";
import PrivacyPolicyHtml from "@incubateur-ademe/legal-pages-markdown/html/PrivacyPolicy.html?raw";
import { useId } from "react";

import { PrivacyPolicyCookieTable, privacyPolicyDefaultProps, PrivacyPolicyThirdPartyTable } from "../../PrivacyPolicy";
import { ClientOnly } from "../../utils/ClientOnly";
import { ClientPortal } from "../../utils/ClientPortal";
import { useHtmlParser } from "../useHtmlParser";

export type PrivacyPolicyClientProps = PrivacyPolicyProps;

export const PrivacyPolicyClient = ({
  date = privacyPolicyDefaultProps.date,
  cookieConsentButton,
  siteName,
  thirdParties = privacyPolicyDefaultProps.thirdParties,
  table_thirdParties,
  cookies = privacyPolicyDefaultProps.cookies,
  table_cookies,
}: PrivacyPolicyClientProps) => {
  const buttonPortalId = useId();
  const tableThirdPartiesPortalId = useId();
  const tableCookiesPortalId = useId();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: useHtmlParser(PrivacyPolicyHtml, {
            date,
            siteName,
            cookieConsentButton: `<span id="${buttonPortalId}"></span>`,
            table_thirdParties: `<div id="${tableThirdPartiesPortalId}"></div>`,
            table_cookies: `<div id="${tableCookiesPortalId}"></div>`,
          }),
        }}
      />
      <ClientOnly>
        <ClientPortal childrenId={buttonPortalId}>{cookieConsentButton}</ClientPortal>
        <ClientPortal childrenId={tableThirdPartiesPortalId}>
          {table_thirdParties ?? <PrivacyPolicyThirdPartyTable thirdParties={thirdParties} />}
        </ClientPortal>
        <ClientPortal childrenId={tableCookiesPortalId}>
          {table_cookies ?? <PrivacyPolicyCookieTable cookies={cookies} />}
        </ClientPortal>
      </ClientOnly>
    </>
  );
};

export default PrivacyPolicyClient;
