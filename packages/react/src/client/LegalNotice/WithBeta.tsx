"use client";

import { type LegalNoticeProps } from "@incubateur-ademe/legal-pages-markdown";
import LegalNoticeWithBetaHtml from "@incubateur-ademe/legal-pages-markdown/html/LegalNotice_withBeta.html?raw";
import { useId } from "react";

import { legalNoticeDefaultProps, LegalNoticeThirdPartyText } from "../../LegalNotice";
import { ClientOnly } from "../../utils/ClientOnly";
import { ClientPortal } from "../../utils/ClientPortal";
import { useHtmlParser } from "../useHtmlParser";
import { type LegalNoticeClientProps } from ".";

export { type LegalNoticeProps };

export const LegalNoticeWithBetaClient = ({
  date = legalNoticeDefaultProps.date,
  siteName,
  thirdParties = legalNoticeDefaultProps.thirdParties,
  elementThirdParties,
  licenceUrl,
  privacyPolicyUrl = legalNoticeDefaultProps.privacyPolicyUrl,
  siteHost,
  siteUrl,
  contactEmail,
}: LegalNoticeClientProps) => {
  const elementThirdPartiesPortalId = useId();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: useHtmlParser(LegalNoticeWithBetaHtml, {
            date,
            siteName,
            elementThirdParties: `<div id="${elementThirdPartiesPortalId}"></div>`,
            licenceUrl,
            privacyPolicyUrl,
            siteHost,
            siteUrl,
            contactEmail,
            includeBetaGouv: true,
          }),
        }}
      />
      <ClientOnly>
        <ClientPortal childrenId={elementThirdPartiesPortalId}>
          {elementThirdParties ?? <LegalNoticeThirdPartyText thirdParties={thirdParties} />}
        </ClientPortal>
      </ClientOnly>
    </>
  );
};

export default LegalNoticeWithBetaClient;
