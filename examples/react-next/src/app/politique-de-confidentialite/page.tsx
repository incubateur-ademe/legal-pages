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
        array_cookies={[]}
        array_thirdParties={[]}
      />
    </div>
  );
}
