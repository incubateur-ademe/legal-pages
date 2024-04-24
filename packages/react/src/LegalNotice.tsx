/// <reference types="@incubateur-ademe/legal-pages-markdown/html" />

import { type LegalNoticeProps } from "@incubateur-ademe/legal-pages-markdown";
import LegalNoticeHtml from "@incubateur-ademe/legal-pages-markdown/html/LegalNotice.html?raw";
import LegalNotice_withBetaHtml from "@incubateur-ademe/legal-pages-markdown/html/LegalNotice_withBeta.html?raw";
import { type ReactNode, useId } from "react";

import { ClientOnly } from "./ClientOnly";
import { ClientPortal } from "./ClientPortal";
import { htmlParser } from "./htmlParser";

const ThirdPartyText = ({ thirdParties }: Required<Pick<LegalNoticeProps, "thirdParties">>) => (
  <>
    {thirdParties.length ? (
      thirdParties.map(({ name, url, text }, index) => (
        <p key={index}>
          {text}{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </p>
      ))
    ) : (
      <p>Aucun tiers n'est utilisé sur ce site.</p>
    )}
  </>
);

export const LegalNotice = ({
  date = "12/03/2024",
  includeBetaGouv = false,
  siteName,
  thirdParties = [],
  element_thirdParties,
  cookiesPolicyUrl,
  licenceUrl,
  privacyPolicyUrl,
  siteHost,
  siteUrl,
}: LegalNoticeProps<ReactNode>) => {
  const elementThirdPartiesPortalId = useId();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: htmlParser(includeBetaGouv ? LegalNotice_withBetaHtml : LegalNoticeHtml, {
            date,
            includeBetaGouv,
            siteName,
            element_thirdParties: `<div id="${elementThirdPartiesPortalId}"></div>`,
            cookiesPolicyUrl,
            licenceUrl,
            privacyPolicyUrl,
            siteHost,
            siteUrl,
          }),
        }}
      />
      <ClientOnly>
        <ClientPortal childrenId={elementThirdPartiesPortalId}>
          {element_thirdParties ?? <ThirdPartyText thirdParties={thirdParties} />}
        </ClientPortal>
      </ClientOnly>
    </>
  );
};
