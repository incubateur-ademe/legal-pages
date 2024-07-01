declare module "@incubateur-ademe/legal-pages-markdown/html/*" {
  const content: string & { __legalPagesProps: unknown };
  export = content;
}

declare module "@incubateur-ademe/legal-pages-markdown/html/CookiesPolicy.html*" {
  import { type CookiesPolicyProps } from "@incubateur-ademe/legal-pages-markdown";

  const content: string & { __legalPagesProps: Omit<CookiesPolicyProps, "includeBetaGouv"> };
  export = content;
}

declare module "@incubateur-ademe/legal-pages-markdown/html/CookiesPolicy_withBeta.html*" {
  import { type CookiesPolicyProps } from "@incubateur-ademe/legal-pages-markdown";

  const content: string & {
    __legalPagesProps: Omit<CookiesPolicyProps, "includeBetaGouv"> & { includeBetaGouv: true };
  };
  export = content;
}

declare module "@incubateur-ademe/legal-pages-markdown/html/LegalNotice.html*" {
  import { type LegalNoticeProps } from "@incubateur-ademe/legal-pages-markdown";

  const content: string & { __legalPagesProps: Omit<LegalNoticeProps, "includeBetaGouv"> };
  export = content;
}

declare module "@incubateur-ademe/legal-pages-markdown/html/LegalNotice_withBeta.html*" {
  import { type LegalNoticeProps } from "@incubateur-ademe/legal-pages-markdown";

  const content: string & {
    __legalPagesProps: Omit<LegalNoticeProps, "includeBetaGouv"> & { includeBetaGouv: true };
  };
  export = content;
}

declare module "@incubateur-ademe/legal-pages-markdown/html/PrivacyPolicy.html*" {
  import { type PrivacyPolicyProps } from "@incubateur-ademe/legal-pages-markdown";

  const content: string & {
    __legalPagesProps: PrivacyPolicyProps;
  };
  export = content;
}
