import { type PrivacyPolicyProps } from "@incubateur-ademe/legal-pages-markdown";
import { type ReactNode, useId } from "react";

import { RELEASE_DATE } from "../releaseDate";
import { ClientOnly } from "../utils/ClientOnly";
import { ClientPortal } from "../utils/ClientPortal";
import { htmlParser } from "../utils/htmlParser";

export { type PrivacyPolicyProps };

export const PrivacyPolicyThirdPartyTable = ({ thirdParties }: Required<Pick<PrivacyPolicyProps, "thirdParties">>) => (
  <div className="fr-table fr-table--no-caption">
    <table>
      <caption>Caption tableau des sous-traitants</caption>
      <thead>
        <tr>
          <th scope="col">Partenaire</th>
          <th scope="col">Pays destinataire</th>
          <th scope="col">Pays d’hébergement</th>
          <th scope="col">Traitement réalisé</th>
          <th scope="col">Garantie</th>
        </tr>
      </thead>
      <tbody>
        {thirdParties.map((thirdParty, index) => (
          <tr key={`${index}-${thirdParty.name}`}>
            <td>{thirdParty.name}</td>
            <td>{thirdParty.country}</td>
            <td>{thirdParty.hostingCountry}</td>
            <td>{thirdParty.serviceType}</td>
            <td>
              <a href={thirdParty.policyUrl} rel="noopener noreferrer" target="_blank">
                {thirdParty.policyUrl}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const PrivacyPolicyCookieTable = ({ cookies }: Required<Pick<PrivacyPolicyProps, "cookies">>) => (
  <div className="fr-table fr-table--no-caption">
    <table>
      <caption>Caption tableau des cookies</caption>
      <thead>
        <tr>
          <th scope="col">Catégorie de cookie</th>
          <th scope="col">Nom du cookie</th>
          <th scope="col">Durée de conservation</th>
          <th scope="col">Finalités</th>
          <th scope="col">Éditeur</th>
          <th scope="col">Destination</th>
        </tr>
      </thead>
      <tbody>
        {cookies.map((cookie, index) => (
          <tr key={`${index}-${cookie.name}`}>
            <td>{cookie.category}</td>
            <td>{cookie.name}</td>
            <td>{cookie.expiration}</td>
            <td>{cookie.finalities}</td>
            <td>{cookie.editor}</td>
            <td>{cookie.destination}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const privacyPolicyDefaultProps = {
  date: RELEASE_DATE,
  thirdParties: [],
  cookies: [],
};

export const PrivacyPolicy = async ({
  date = privacyPolicyDefaultProps.date,
  cookieConsentButton,
  siteName,
  thirdParties = privacyPolicyDefaultProps.thirdParties,
  table_thirdParties,
  cookies = privacyPolicyDefaultProps.cookies,
  table_cookies,
}: PrivacyPolicyProps<ReactNode>) => {
  const buttonPortalId = useId();
  const tableThirdPartiesPortalId = useId();
  const tableCookiesPortalId = useId();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: await htmlParser("PrivacyPolicy", {
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

export default PrivacyPolicy;
