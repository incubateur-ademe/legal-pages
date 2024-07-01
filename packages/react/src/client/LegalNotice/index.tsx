"use client";

import { type LegalNoticeProps } from "@incubateur-ademe/legal-pages-markdown";
import LegalNoticeHtml from "@incubateur-ademe/legal-pages-markdown/html/LegalNotice.html?raw";
import { type ReactNode, useId } from "react";

import { legalNoticeDefaultProps, LegalNoticeThirdPartyText } from "../../LegalNotice";
import { ClientOnly } from "../../utils/ClientOnly";
import { ClientPortal } from "../../utils/ClientPortal";
import { useHtmlParser } from "../useHtmlParser";

export type LegalNoticeClientProps = Omit<LegalNoticeProps<ReactNode>, "includeBetaGouv">;

export const LegalNoticeClient = ({
  date = legalNoticeDefaultProps.date,
  siteName,
  thirdParties = legalNoticeDefaultProps.thirdParties,
  element_thirdParties,
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
          __html: useHtmlParser(LegalNoticeHtml, {
            date,
            siteName,
            element_thirdParties: `<div id="${elementThirdPartiesPortalId}"></div>`,
            licenceUrl,
            privacyPolicyUrl,
            siteHost,
            siteUrl,
            contactEmail,
          }),
        }}
      />
      <ClientOnly>
        <ClientPortal childrenId={elementThirdPartiesPortalId}>
          {element_thirdParties ?? <LegalNoticeThirdPartyText thirdParties={thirdParties} />}
        </ClientPortal>
      </ClientOnly>
    </>
  );
};

export default LegalNoticeClient;