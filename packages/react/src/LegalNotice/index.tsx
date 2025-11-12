import { type LegalNoticeProps } from "@incubateur-ademe/legal-pages-markdown";
import { type ReactNode, useId } from "react";

import { RELEASE_DATE } from "../releaseDate";
import { ClientOnly } from "../utils/ClientOnly";
import { ClientPortal } from "../utils/ClientPortal";
import { htmlParser } from "../utils/htmlParser";

export { type LegalNoticeProps };

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

export const LegalNotice = async ({
  date = RELEASE_DATE,
  includeBetaGouv = false,
  siteName,
  thirdParties = [],
  elementThirdParties,
  licenceUrl,
  privacyPolicyUrl = "/politique-de-confidentialite",
  siteHost,
  siteUrl,
  contactEmail,
}: LegalNoticeProps<ReactNode>) => {
  const tableThirdPartiesPortalId = useId();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: await htmlParser("LegalNotice", {
            date,
            includeBetaGouv,
            siteName,
            elementThirdParties: `<div id="${tableThirdPartiesPortalId}"></div>`,
            licenceUrl,
            privacyPolicyUrl,
            siteHost,
            siteUrl,
            contactEmail,
          }),
        }}
      />
      <ClientOnly>
        <ClientPortal childrenId={tableThirdPartiesPortalId}>
          {elementThirdParties ?? <ThirdPartyText thirdParties={thirdParties} />}
        </ClientPortal>
      </ClientOnly>
    </>
  );
};

export default LegalNotice;
