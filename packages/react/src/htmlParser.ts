import Mustache from "mustache";
import { useMemo } from "react";

export const htmlParser = (template: string, data: object) => {
  return useMemo(
    () =>
      Mustache.render(template, data, void 0, {
        escape: (text: string) => text,
      }),
    [template, data],
  );
};
