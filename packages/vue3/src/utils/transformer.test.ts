import { describe, expect, it } from "vitest";

import { Transformer } from "./transformer";

// Test data constants with labels for dynamic test generation
const TEST_CASES = {
  SIMPLE: {
    label: "simple mustache template transformation",
    tests: {
      siteUrl: {
        description: 'should transform href="{{siteUrl}}" to :href="siteUrl"',
        input: '<a href="{{siteUrl}}">',
        expected: '<a :href="siteUrl">',
      },
      siteUrlSingleQuotes: {
        description: "should transform single quotes",
        input: "<a href='{{siteUrl}}'>",
        expected: '<a :href="siteUrl">',
      },
      multipleAttrs: {
        description: "should transform multiple simple attributes",
        input: '<a href="{{siteUrl}}" title="{{siteName}}">',
        expected: '<a :href="siteUrl" :title="siteName">',
      },
    },
  },
  COMPLEX: {
    label: "complex template with prefix/suffix transformation",
    tests: {
      emailPrefix: {
        description: 'should transform href="mailto:{{siteHost.email}}" to :href="`mailto:${siteHost.email}`"',
        input: '<a href="mailto:{{siteHost.email}}">',
        expected: '<a :href="`mailto:${siteHost.email}`">',
      },
      urlWithPath: {
        description: "should transform complex template with prefix and suffix",
        input: '<a href="https://{{domain}}/path">',
        expected: '<a :href="`https://${domain}/path`">',
      },
      multipleTemplates: {
        description: "should handle multiple mustache templates in one attribute",
        input: '<a href="{{protocol}}://{{domain}}:{{port}}">',
        expected: '<a :href="`${protocol}://${domain}:${port}`">',
      },
    },
  },
  MIXED: {
    label: "multiple attributes in same tag",
    tests: {
      complexAndSimple: {
        description: "should transform multiple attributes with mixed simple and complex templates",
        input: '<a target="_blank" href="mailto:{{siteHost.email}}" title="{{siteName}}">',
        expected: '<a target="_blank" :href="`mailto:${siteHost.email}`" :title="siteName">',
      },
      withStaticAttrs: {
        description: "should leave non-mustache attributes unchanged",
        input: '<a class="link" href="{{siteUrl}}" data-test="value">',
        expected: '<a class="link" :href="siteUrl" data-test="value">',
      },
    },
  },
  TEXT_CONTENT: {
    label: "text content should remain unchanged",
    tests: {
      textOnly: {
        description: "should not transform mustache templates in text content",
        input: "<p>{{siteName}} is a great site</p>",
        expected: "<p>{{siteName}} is a great site</p>",
      },
      mixedContent: {
        description: "should transform attributes but leave text content unchanged",
        input: '<a href="{{siteUrl}}">Visit {{siteName}}</a>',
        expected: '<a :href="siteUrl">Visit {{siteName}}</a>',
      },
      complexHtml: {
        description: "should handle complex HTML with mixed content",
        input: `
        <div>
          <h1>{{title}}</h1>
          <p>Welcome to {{siteName}}</p>
          <a href="{{siteUrl}}" title="{{siteName}}">{{linkText}}</a>
          <a href="mailto:{{email}}">Contact us</a>
        </div>
      `,
        expected: `
        <div>
          <h1>{{title}}</h1>
          <p>Welcome to {{siteName}}</p>
          <a :href="siteUrl" :title="siteName">{{linkText}}</a>
          <a :href="\`mailto:\${email}\`">Contact us</a>
        </div>
      `,
      },
    },
  },
  EDGE_CASES: {
    label: "edge cases and error handling",
    tests: {
      emptyString: {
        description: "should handle empty string",
        input: "",
        expected: "",
      },
      noTemplates: {
        description: "should handle HTML without mustache templates",
        input: '<a href="https://example.com">Link</a>',
        expected: '<a href="https://example.com">Link</a>',
      },
      malformed: {
        description: "should handle malformed mustache templates (should not transform)",
        input: '<a href="{{incomplete">Link</a>',
        expected: '<a href="{{incomplete">Link</a>',
      },
      nestedQuotes: {
        description: "should handle nested quotes correctly",
        input: '<a href="{{siteUrl}}" onclick="alert(\'test\')">',
        expected: '<a :href="siteUrl" onclick="alert(\'test\')">',
      },
      propertyPath: {
        description: "should handle attributes with complex property paths",
        input: '<a href="{{config.site.baseUrl}}">',
        expected: '<a :href="config.site.baseUrl">',
      },
      arrayAccess: {
        description: "should handle attributes with array access",
        input: '<a href="{{links[0].url}}">',
        expected: '<a :href="links[0].url">',
      },
    },
  },
};

// Helper function to reduce test boilerplate
const expectTransformation = (testCase: { expected: string; input: string }) => {
  expect(Transformer.mustacheToVue(testCase.input)).toBe(testCase.expected);
};

describe("Transformer.mustacheToVue", () => {
  // Generate test suites dynamically from TEST_CASES
  Object.entries(TEST_CASES).forEach(([_categoryKey, category]) => {
    describe(category.label, () => {
      Object.entries(category.tests).forEach(([_testKey, testCase]) => {
        it(testCase.description, () => {
          expectTransformation(testCase);
        });
      });
    });
  });
});
