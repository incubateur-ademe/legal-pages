"use client";

import { fr } from "@codegouvfr/react-dsfr";
import CookiesPolicyClient from "@incubateur-ademe/legal-pages-react/CookiesPolicyClient";

import { CookieConsentButton } from "../../CookieConsentButton";

// "use client" and this are for testing purpose
export const dynamic = "force-dynamic";

export default function CookiePolicyClientPage() {
  return (
    <div className={fr.cx("fr-container", "fr-my-4w")}>
      <CookiesPolicyClient
        analyticTool={{
          name: "Matomo",
          cookieListUrl: "https://matomo.org/faq/general/faq_146/",
          policyUrl: "https://matomo.org/privacy-policy/",
        }}
        cookieConsentButton={<CookieConsentButton>CLICK</CookieConsentButton>}
        siteName="SITE EXEMPLE"
      />
    </div>
  );
}
