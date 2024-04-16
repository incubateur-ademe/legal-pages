import { fr } from "@codegouvfr/react-dsfr";
import { CookiePolicy } from "@incubateur-ademe/legal-pages-react";

import { CookieConsentButton } from "./CookieConsentButton";

// eslint-disable-next-line import/no-default-export
export default function CookiePolicyPage() {
  return (
    <div className={fr.cx("fr-container", "fr-my-4w")}>
      <CookiePolicy
        analyticTool={{
          name: "Matomo",
          cookieListUrl: "https://matomo.org/faq/general/faq_146/",
          policyUrl: "https://matomo.org/privacy-policy/",
        }}
        cookieConsentButton={<CookieConsentButton>CLICK</CookieConsentButton>}
        siteName="SITE EXAMPLE"
      />
    </div>
  );
}
