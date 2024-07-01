/// <reference types="@incubateur-ademe/legal-pages-markdown/html" />

import {
  type CookiesPolicyProps,
  type LegalNoticeProps,
  type PrivacyPolicyProps,
} from "@incubateur-ademe/legal-pages-markdown";
import Mustache from "mustache";
import { useMemo } from "react";

interface HtmlPropsMapping {
  CookiesPolicy: CookiesPolicyProps;
  LegalNotice: LegalNoticeProps;
  PrivacyPolicy: PrivacyPolicyProps;
}

const htmlImporter = {
  LegalNotice: (withBeta: boolean) =>
    withBeta
      ? import("@incubateur-ademe/legal-pages-markdown/html/LegalNotice_withBeta.html?raw")
      : import("@incubateur-ademe/legal-pages-markdown/html/LegalNotice.html?raw"),
  CookiesPolicy: (withBeta: boolean) =>
    withBeta
      ? import("@incubateur-ademe/legal-pages-markdown/html/CookiesPolicy_withBeta.html?raw")
      : import("@incubateur-ademe/legal-pages-markdown/html/CookiesPolicy.html?raw"),
  PrivacyPolicy: () => import("@incubateur-ademe/legal-pages-markdown/html/PrivacyPolicy.html?raw"),
} satisfies Record<keyof HtmlPropsMapping, (withBeta: boolean) => Promise<{ default: string }>>;

export const htmlParser = async <T extends keyof HtmlPropsMapping>(template: T, data: HtmlPropsMapping[T]) => {
  return useMemo(async () => {
    const includeBetaGouv = "includeBetaGouv" in data ? !!data.includeBetaGouv : false;

    return Mustache.render((await htmlImporter[template](includeBetaGouv)).default, data, void 0, {
      escape: (text: string) => text,
    });
  }, [template, data]);
};
