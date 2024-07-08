"use client";

import { fr } from "@codegouvfr/react-dsfr";
import LegalNoticeClient from "@incubateur-ademe/legal-pages-react/LegalNoticeClient";

// "use client" and this are for testing purpose
export const dynamic = "force-dynamic";

export default function LegalNoticeClientPage() {
  return (
    <div className={fr.cx("fr-container", "fr-my-4w")}>
      <LegalNoticeClient
        siteName="SITE EXEMPLE"
        siteUrl={process.env.NEXT_PUBLIC_SITE_URL!}
        licenceUrl="https://gitub.com/example/example/blob/main/LICENSE.md"
        privacyPolicyUrl="/politique-de-confidentialite"
        siteHost={{
          name: "Vercel Inc.",
          address: "440 N Barranca Ave #4133<br/>Covina, CA 91723",
          country: "États-Unis",
          email: "privacy@vercel.com",
        }}
        contactEmail="test@exemple.fr"
      />
    </div>
  );
}
