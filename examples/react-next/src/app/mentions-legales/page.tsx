import { fr } from "@codegouvfr/react-dsfr";
import { LegalNotice } from "@incubateur-ademe/legal-pages-react/LegalNotice";

export default function CookiePolicyPage() {
  return (
    <div className={fr.cx("fr-container", "fr-my-4w")}>
      <LegalNotice
        includeBetaGouv
        siteName="SITE EXAMPLE"
        siteUrl={process.env.NEXT_PUBLIC_SITE_URL!}
        licenceUrl="https://gitub.com/example/example/blob/main/LICENSE.md"
        privacyPolicyUrl="/politique-de-confidentialite"
        siteHost={{
          name: "Vercel Inc.",
          address: "440 N Barranca Ave #4133<br/>Covina, CA 91723",
          country: "États-Unis",
          email: "privacy@vercel.com",
        }}
      />
    </div>
  );
}
