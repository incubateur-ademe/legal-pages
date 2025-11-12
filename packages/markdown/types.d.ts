// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./html.d.ts" />

export interface CommonProps {
  /**
   * Date de la dernière mise à jour. La date par défaut est celle de la compilation.
   *
   * @example "01/01/2022"
   * @default "<Date de la compilation>"
   */
  date?: string;
  /**
   * Mentionner Beta.gouv ou non dans les textes en plus de l'ADEME.
   *
   * (non utilisé pour la politique de confidentialité)
   *
   * @default false
   */
  includeBetaGouv?: boolean;
  /**
   * Nom du site.
   */
  siteName: string;
}

//#region CookiePolicy
export type CookiesPolicyPropsAnalyticTool = {
  /**
   * Url de la page listant les cookies utilisés par l'outil.
   */
  cookieListUrl: string;
  /**
   * Nom de l'outil d'analyse.
   */
  name: string;
  /**
   * Url de la politique de confidentialité de l'outil.
   */
  policyUrl: string;
};

export interface CookiesPolicyProps<ElementType = string> extends CommonProps {
  /**
   * Outil d'analyse d'audience.
   */
  analyticTool: CookiesPolicyPropsAnalyticTool;
  /**
   * Bouton de consentement aux cookies. Peut être un composant propre à la librairie utilisée.
   */
  cookieConsentButton: ElementType;
}
//#endregion

//#region PrivacyPolicy
export interface PrivacyPolicyPropsThirdParty {
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

export interface PrivacyPolicyPropsCookie {
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

export type PrivacyPolicyPropsWithThirdPartiesAsArray = {
  tableThirdParties?: never;
  /**
   * Mentionner ici tous les sous-traitants intervenant dans le traitement des données.
   */
  thirdParties: PrivacyPolicyPropsThirdParty[];
};

export type PrivacyPolicyPropsWithThirdPartiesAsTableElement<ElementType = string> = {
  /** @see {@link PrivacyPolicyPropsWithThirdPartiesAsArray.thirdParties} */
  tableThirdParties: ElementType;
  thirdParties?: never;
};

export type PrivacyPolicyPropsWithCookiesAsArray = {
  /**
   * Mentionner ici tous les cookies utilisés par le site.
   */
  cookies: PrivacyPolicyPropsCookie[];
  tableCookies?: never;
};

export type PrivacyPolicyPropsWithCookiesAsTableElement<ElementType = string> = {
  cookies?: never;
  /** @see {@link PrivacyPolicyPropsWithCookiesAsArray.cookies} */
  tableCookies: ElementType;
};

export type PrivacyPolicyPropsBase<ElementType = string> = CommonProps & {
  /**
   * Bouton de consentement aux cookies. Peut être un composant propre à la librairie utilisée.
   */
  cookieConsentButton: ElementType;
};

export type PrivacyPolicyProps<ElementType = string> = PrivacyPolicyPropsBase<ElementType> &
  (PrivacyPolicyPropsWithCookiesAsArray | PrivacyPolicyPropsWithCookiesAsTableElement<ElementType>) &
  (PrivacyPolicyPropsWithThirdPartiesAsArray | PrivacyPolicyPropsWithThirdPartiesAsTableElement<ElementType>);
//#endregion

//#region LegalNotice
export interface LegalNoticePropsSiteHost {
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

export interface LegalNoticePropsThirdParty {
  /**
   * Nom du service tiers.
   *
   * @example "Storyset"
   */
  name: string;
  /**
   * Texte placé avant le nom du service tiers.
   *
   * @example "Certaines illustrations sont réalisées par"
   */
  text: string;
  /**
   * Lien vers le service tiers.
   */
  url: string;
}

export type LegalNoticePropsWithThirdPartiesAsArray = {
  elementThirdParties?: never;
  /**
   * Mentionner ici tout service tiers fournissant des éléments complémentaires
   * tels que des fonctionnalités additionnelles – formulaire en ligne, API, Map… – ;
   * des illustrations ou pictogrammes venant de banques d’images ;
   * des polices de caractère propriétaire ; etc.
   */
  thirdParties?: LegalNoticePropsThirdParty[];
};

export type LegalNoticePropsWithThirdPartiesAsElement<ElementType = string> = {
  /** @see {@link LegalNoticePropsWithThirdPartiesAsArray.thirdParties} */
  elementThirdParties?: ElementType;
  thirdParties?: never;
};

export type LegalNoticePropsBase = CommonProps & {
  /**
   * Email de contact.
   */
  contactEmail: string;
  /**
   * Licence du code, habituellement sur GitHub.
   */
  licenceUrl: string;
  /**
   * Lien vers la page de politique de confidentialité.
   *
   * @default "/politique-de-confidentialite"
   */
  privacyPolicyUrl?: string;
  /**
   * Hébergeur du site.
   */
  siteHost: LegalNoticePropsSiteHost;
  /**
   * Url du site.
   */
  siteUrl: string;
};

export type LegalNoticeProps<ElementType = string> = LegalNoticePropsBase &
  (LegalNoticePropsWithThirdPartiesAsArray | LegalNoticePropsWithThirdPartiesAsElement<ElementType>);
//#endregion
