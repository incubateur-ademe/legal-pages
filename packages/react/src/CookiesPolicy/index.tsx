import { type CookiesPolicyProps } from "@incubateur-ademe/legal-pages-markdown";
import { useId } from "react";

import { RELEASE_DATE } from "../releaseDate";
import { ClientOnly } from "../utils/ClientOnly";
import { ClientPortal } from "../utils/ClientPortal";
import { htmlParser } from "../utils/htmlParser";

export { type CookiesPolicyProps };

export const CookiesPolicy = async ({
  date = RELEASE_DATE,
  includeBetaGouv = false,
  cookieConsentButton,
  siteName,
  analyticTool,
}: CookiesPolicyProps<React.ReactNode>) => {
  const buttonPortalId = useId();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: await htmlParser("CookiesPolicy", {
            date,
            includeBetaGouv,
            siteName,
            cookieConsentButton: `<span id="${buttonPortalId}"></span>`,
            analyticTool,
          }),
        }}
      />
      <ClientOnly>
        <ClientPortal childrenId={buttonPortalId}>{cookieConsentButton}</ClientPortal>
      </ClientOnly>
    </>
  );
};

export default CookiesPolicy;
