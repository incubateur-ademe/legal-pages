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

  export type WithThirdPartiesAsArray = {
    table_thirdParties?: never;
    thirdParties: ThirdParty[];
  };

  export type WithThirdPartiesAsTableElement<ElementType = string> = {
    table_thirdParties: ElementType;
    thirdParties?: never;
  };

  export type WithCookiesAsArray = {
    cookies: Cookie[];
    table_cookies?: never;
  };

  export type WithCookiesAsTableElement<ElementType = string> = {
    cookies?: never;
    table_cookies: ElementType;
  };
}

export type PrivacyPolicyProps<ElementType = string> = CommonProps & {
  cookieConsentButton: ElementType;
} & (PrivacyPolicyProps.WithCookiesAsArray | PrivacyPolicyProps.WithCookiesAsTableElement<ElementType>) &
  (PrivacyPolicyProps.WithThirdPartiesAsArray | PrivacyPolicyProps.WithThirdPartiesAsTableElement<ElementType>);
//#endregion

//#region LegalNotice
export namespace LegalNoticeProps {
  export interface SiteHost {
    /**
     * "Adresse", adresse de l'hébergeur.
     */
    address: string;
    /**
     * "Pays", pays d'hébergement du site.
     */
    country: string;
    /**
     * "Email", email de l'hébergeur.
     */
    email?: string;
    /**
     * "Nom", nom de l'hébergeur.
     */
    name: string;
  }

  export interface ThirdParty {
    name: string;
    text: string;
    url: string;
  }

  export type WithThirdPartiesAsArray = {
    element_thirdParties?: never;
    /**
     * Mentionner ici tout service tiers fournissant des éléments complémentaires
     * tels que des fonctionnalités additionnelles – formulaire en ligne, API, Map… – ;
     * des illustrations ou pictogrammes venant de banques d’images ;
     * des polices de caractère propriétaire ; etc.
     */
    thirdParties?: ThirdParty[];
  };

  export type WithThirdPartiesAsElement<ElementType = string> = {
    /** @see {@link WithThirdPartiesAsArray.thirdParties} */
    element_thirdParties?: ElementType;
    thirdParties?: never;
  };
}

export type LegalNoticeProps<ElementType = string> = CommonProps & {
  cookiesPolicyUrl: string;
  /**
   * Licence du code, habituellement sur GitHub.
   */
  licenceUrl: string;
  privacyPolicyUrl: string;
  siteHost: LegalNoticeProps.SiteHost;
  siteUrl: string;
} & (LegalNoticeProps.WithThirdPartiesAsArray | LegalNoticeProps.WithThirdPartiesAsElement<ElementType>);
//#endregion
