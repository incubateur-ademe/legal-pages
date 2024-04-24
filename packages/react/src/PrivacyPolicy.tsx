import { type PrivacyPolicyProps } from "@incubateur-ademe/legal-pages-markdown";
import { type ReactNode, useId } from "react";

import { ClientOnly } from "./ClientOnly";
import { ClientPortal } from "./ClientPortal";
import { htmlParser } from "./htmlParser";

export { type PrivacyPolicyProps };

const ThirdPartyTable = ({ thirdParties }: Required<Pick<PrivacyPolicyProps, "thirdParties">>) => (
  <div className="fr-table fr-table--no-caption">
    <table>
      <caption>Caption tableau des sous-traitans</caption>
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

const CookieTable = ({ cookies }: Required<Pick<PrivacyPolicyProps, "cookies">>) => (
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

export const PrivacyPolicy = async ({
  date = "12/03/2024",
  includeBetaGouv = false,
  cookieConsentButton,
  siteName,
  thirdParties = [],
  table_thirdParties,
  cookies = [],
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
            includeBetaGouv,
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
          {table_thirdParties ?? <ThirdPartyTable thirdParties={thirdParties} />}
        </ClientPortal>
        <ClientPortal childrenId={tableCookiesPortalId}>
          {table_cookies ?? <CookieTable cookies={cookies} />}
        </ClientPortal>
      </ClientOnly>
    </>
  );
};
