import { fr } from "@codegouvfr/react-dsfr";
import Link from "next/link";

// eslint-disable-next-line import/no-default-export
export default function Root() {
  return (
    <div className={fr.cx("fr-container", "fr-my-2w")}>
      <p>
        <Link href="/mentions-legales">Mentions Légales</Link>
      </p>
      <p>
        <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
      </p>
      <p>
        <Link href="/politique-des-cookies">Politique des cookies</Link>
      </p>
    </div>
  );
}
