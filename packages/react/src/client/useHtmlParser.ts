/// <reference types="@incubateur-ademe/legal-pages-markdown/html" />

import Mustache from "mustache";
import { useMemo } from "react";

export const useHtmlParser = <
  T extends typeof import("@incubateur-ademe/legal-pages-markdown/html/*"),
  P extends T["__legalPagesProps"],
>(
  template: T,
  props: P,
) => {
  return useMemo(
    () =>
      Mustache.render(template, props, void 0, {
        escape: (text: string) => text,
      }),
    [template, props],
  );
};
