import { fr } from "@codegouvfr/react-dsfr";
import { PrivacyPolicy } from "@incubateur-ademe/legal-pages-react";

import { CookieConsentButton } from "../CookieConsentButton";

// eslint-disable-next-line import/no-default-export
export default function CookiePolicyPage() {
  return (
    <div className={fr.cx("fr-container", "fr-my-4w")}>
      <PrivacyPolicy
        includeBetaGouv
        cookieConsentButton={<CookieConsentButton>CLICK</CookieConsentButton>}
        siteName="SITE EXAMPLE"
        cookies={[
          {
            category: "CATEGORY",
            destination: "FR",
            editor: "EDITOR",
            expiration: "2024",
            finalities: "FINALITIES",
            name: "NAME",
          },
          {
            category: "CATEGORY",
            destination: "FR",
            editor: "EDITOR",
            expiration: "2024",
            finalities: "FINALITIES",
            name: "NAME",
          },
        ]}
        thirdParties={[
          {
            name: "NAME",
            country: "FR",
            hostingCountry: "FR",
            serviceType: "TYPE",
            policyUrl: "https://example.com",
          },
          {
            name: "NAME",
            country: "FR",
            hostingCountry: "FR",
            serviceType: "TYPE",
            policyUrl: "https://example.com",
          },
        ]}
      />
    </div>
  );
}
