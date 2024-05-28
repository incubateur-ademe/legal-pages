import { fr } from "@codegouvfr/react-dsfr";
import { CookiesPolicy } from "@incubateur-ademe/legal-pages-react/CookiesPolicy";

import { CookieConsentButton } from "../CookieConsentButton";

export default function CookiePolicyPage() {
  return (
    <div className={fr.cx("fr-container", "fr-my-4w")}>
      <CookiesPolicy
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
