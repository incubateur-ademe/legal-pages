import { fr } from "@codegouvfr/react-dsfr";
import { PrivacyPolicy } from "@incubateur-ademe/legal-pages-react/PrivacyPolicy";

import { CookieConsentButton } from "../CookieConsentButton";

export default function PrivacyPolicyPage() {
  return (
    <div className={fr.cx("fr-container", "fr-my-4w")}>
      <PrivacyPolicy
        includeBetaGouv
        cookieConsentButton={<CookieConsentButton>CLICK</CookieConsentButton>}
        siteName="SITE EXEMPLE"
        cookies={[
          {
            category: "Mesure d’audience anonymisée",
            name: "Matomo",
            expiration: "13 mois",
            finalities: "Mesure d’audience",
            editor: "Matomo & ADEME",
            destination: "France",
          },
        ]}
        thirdParties={[
          {
            name: "Vercel",
            country: "États-Unis",
            hostingCountry: "France (AWS cdg1)",
            serviceType: "Hébergement",
            policyUrl: "https://vercel.com/legal/privacy-policy",
          },
          {
            name: "<Renseigner le nom du service>",
            country: "<Pays d’origine du service>",
            hostingCountry:
              "<Si le service permet de changer la localisation du stockage ou du transit des données, le préciser>",
            serviceType: "<Renseigner le type service (Hébergement, bdd, etc.)>",
            policyUrl: "<Ajouter le lien de la politique de confidentialité du service>",
          },
        ]}
      />
    </div>
  );
}
