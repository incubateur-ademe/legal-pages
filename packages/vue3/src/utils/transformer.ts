/**
 * Transforms HTML attributes from mustache template format to Vue.js binding format
 * Examples:
 * - href="{{siteUrl}}" -> :href="siteUrl"
 * - href="mailto:{{siteHost.email}}" -> :href="`mailto:${siteHost.email}`"
 */
export class Transformer {
  private static readonly ATTRIBUTE_PATTERN = /(\w+)=(["'])([^"']*\{\{[^}]+\}\}[^"']*)\2/g;
  private static readonly PURE_TEMPLATE_PATTERN = /^\{\{([^}]+)\}\}$/;
  private static readonly MUSTACHE_PATTERN = /\{\{([^}]+)\}\}/g;

  public static mustacheToVue(html: string): string {
    // Pattern to match attribute="...{{...}}..." or attribute='...{{...}}...'
    // This regex captures:
    // 1. The attribute name
    // 2. The quote type (" or ')
    // 3. The complete attribute value that contains mustache templates
    return html.replace(Transformer.ATTRIBUTE_PATTERN, (match, attrName, quote, fullValue: string) => {
      // Check if the value is purely a mustache template (no prefix/suffix)
      const pureTemplateMatch = fullValue.match(Transformer.PURE_TEMPLATE_PATTERN);
      if (pureTemplateMatch) {
        // Simple case: href="{{siteUrl}}" -> :href="siteUrl"
        return `:${attrName}="${pureTemplateMatch[1]}"`;
      } else {
        // Complex case: href="mailto:{{siteHost.email}}" -> :href="`mailto:${siteHost.email}`"
        // Replace all {{...}} with ${...} for template literal syntax
        const templateLiteralValue = fullValue.replace(Transformer.MUSTACHE_PATTERN, "${$1}");
        return `:${attrName}="\`${templateLiteralValue}\`"`;
      }
    });
  }
}
