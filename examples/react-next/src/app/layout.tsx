import { fr } from "@codegouvfr/react-dsfr";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { Header, type HeaderProps } from "@codegouvfr/react-dsfr/Header";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import { SkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import Link from "next/link";
import { type PropsWithChildren } from "react";

import { defaultColorScheme } from "../defaultColorScheme";
import { StartDsfr } from "../StartDsfr";
import styles from "./root.module.scss";

const contentId = "content";
const footerId = "footer";

const operatorLogo: HeaderProps["operatorLogo"] = {
  imgUrl: "/img/ademe-incubateur-logo.png",
  alt: "Accélérateur de la Transition Écologique",
  orientation: "vertical",
};

const Brand = () => (
  <>
    République <br />
    Française
  </>
);

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="fr" {...getHtmlAttributes({ defaultColorScheme, lang: "fr" })} className={cx(styles.app)}>
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            "Marianne-Light",
            "Marianne-Light_Italic",
            "Marianne-Regular",
            "Marianne-Regular_Italic",
            "Marianne-Medium",
            "Marianne-Medium_Italic",
            "Marianne-Bold",
            "Marianne-Bold_Italic",
            //"Spectral-Regular",
            //"Spectral-ExtraBold"
          ]}
          doDisableFavicon
        />
      </head>
      <body>
        <SkipLinks
          links={[
            {
              anchor: `#${contentId}`,
              label: "Contenu",
            },
            {
              anchor: `#${footerId}`,
              label: "Pied de page",
            },
          ]}
        />
        <div className={styles.app} vaul-drawer-wrapper="true">
          <Header
            brandTop={<Brand />}
            homeLinkProps={{
              href: "/",
              title: `Accueil - Example`,
            }}
            serviceTitle="Example App"
            operatorLogo={operatorLogo}
          />
          <main className={styles.content}>{children}</main>
          <Footer
            id={footerId}
            accessibility="non compliant"
            accessibilityLinkProps={{ href: "/accessibilite" }}
            contentDescription={`Example est un service développé par l'accélérateur de la transition écologique de l'ADEME.`}
            operatorLogo={operatorLogo}
            partnersLogos={{
              main: {
                imgUrl: "/img/ademe-logo-2022-1.svg",
                alt: "ADEME",
                linkProps: {
                  href: "https://www.ademe.fr/",
                  title: "Agence de la transition écologique",
                  className: fr.cx("fr-raw-link"),
                },
              },
            }}
            bottomItems={[
              {
                text: "CGU",
                linkProps: { href: "#" },
              },
              {
                text: "Politique des cookies",
                linkProps: { href: "/politique-des-cookies" },
              },
              {
                text: "Politique de confidentialité",
                linkProps: { href: "/politique-de-confidentialite" },
              },
              {
                ...headerFooterDisplayItem,
                iconId: "fr-icon-theme-fill",
              },
            ]}
            termsLinkProps={{ href: "/mentions-legales" }}
          />
        </div>
      </body>
    </html>
  );
};

// eslint-disable-next-line import/no-default-export
export default RootLayout;
