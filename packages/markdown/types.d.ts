export interface CommonProps {
  date?: string;
  includeBetaGouv?: boolean;
  siteName: string;
}

//#region CookiePolicy
export namespace CookiesPolicyProps {
  export type AnalyticTool = {
    cookieListUrl: string;
    name: string;
    policyUrl: string;
  };
}

export interface CookiesPolicyProps<ElementType = string> extends CommonProps {
  analyticTool: CookiesPolicyProps.AnalyticTool;
  cookieConsentButton: ElementType;
}
//#endregion

//#region PrivacyPolicy
export namespace PrivacyPolicyProps {
  export interface ThirdParty {
    /**
     * "Pays destinataire", pays d'origine du sous-traitant.
     */
    country: string;
    /**
     * "Pays d’hébergement", pays où sont stockées les données.
     *
     * Si le service permet de changer la localisation du stockage ou du transit des données, le préciser.
     */
    hostingCountry: string;
    /**
     * "Partenaire", nom du sous-traitant.
     */
    name: string;
    /**
     * "Garantie", garanties de protection des données, lien de la politique de confidentialité du sous-traitant.
     */
    policyUrl: string;
    /**
     * "Traitement réalisé", description du traitement des données.
     *
     * @example "Analyse de l'audience", "Hébergement", "Base de données"
     */
    serviceType: string;
  }

  export interface Cookie {
    /**
     * "Catégorie de cookie"
     *
     * @example "Cookies de mesure d'audience", "Cookies de personnalisation"
     */
    category: string;
    /**
     * "Destination", destination du cookie. Dans quel pays les données sont-elles envoyées ?
     *
     * @example "France", "Union européenne", "États-Unis"
     */
    destination: string;
    /**
     * "Éditeur", nom de l'entité responsable du cookie.
     *
     * @example "Matomo & ADEME", "Google Analytics"
     */
    editor: string;
    /**
     * "Durée de conservation", durée de conservation du cookie.
     *
     * @example "13 mois", "Session"
     */
    expiration: string;
    /**
     * "Finalité", finalité du cookie.
     *
     * @example "Mesurer l'audience", "Personnaliser l'expérience utilisateur"
     */
    finalities: string;
    /**
     * "Nom du cookie", nom du cookie.
     */
    name: string;
  }

  export type WithThirdParties = {
    array_thirdParties?: never;
    thirdParties: ThirdParty[];
  };

  export type WithArrayThirdParties<ElementType = string> = {
    array_thirdParties: ElementType;
    thirdParties?: never;
  };

  export type WithCookies = {
    array_cookies?: never;
    cookies: Cookie[];
  };

  export type WithArrayCookies<ElementType = string> = {
    array_cookies: ElementType;
    cookies?: never;
  };
}

export type PrivacyPolicyProps<ElementType = string> = CommonProps & {
  cookieConsentButton: ElementType;
} & (PrivacyPolicyProps.WithArrayCookies<ElementType> | PrivacyPolicyProps.WithCookies) &
  (PrivacyPolicyProps.WithArrayThirdParties<ElementType> | PrivacyPolicyProps.WithThirdParties);
//#endregion
