import { type LegalNoticeProps } from "@incubateur-ademe/legal-pages-markdown";
import { type ReactNode, useId } from "react";

import { RELEASE_DATE } from "../releaseDate";
import { ClientOnly } from "../utils/ClientOnly";
import { ClientPortal } from "../utils/ClientPortal";
import { htmlParser } from "../utils/htmlParser";

export { type LegalNoticeProps };

export const LegalNoticeThirdPartyText = ({ thirdParties }: Required<Pick<LegalNoticeProps, "thirdParties">>) => (
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

export const legalNoticeDefaultProps = {
  date: RELEASE_DATE,
  thirdParties: [],
  privacyPolicyUrl: "/politique-de-confidentialite",
};

export const LegalNotice = async ({
  date = legalNoticeDefaultProps.date,
  includeBetaGouv = false,
  siteName,
  thirdParties = legalNoticeDefaultProps.thirdParties,
  elementThirdParties,
  licenceUrl,
  privacyPolicyUrl = legalNoticeDefaultProps.privacyPolicyUrl,
  siteHost,
  siteUrl,
  contactEmail,
}: LegalNoticeProps<ReactNode>) => {
  const elementThirdPartiesPortalId = useId();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: await htmlParser("LegalNotice", {
            date,
            includeBetaGouv,
            siteName,
            elementThirdParties: `<div id="${elementThirdPartiesPortalId}"></div>`,
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
          {elementThirdParties ?? <LegalNoticeThirdPartyText thirdParties={thirdParties} />}
        </ClientPortal>
      </ClientOnly>
    </>
  );
};

export default LegalNotice;
