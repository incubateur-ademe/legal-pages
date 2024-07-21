/**
 * Needed for "@typescript-eslint/recommended-type-checked" as we lint with more strict rules than Vue's default.
 */
declare module "*.vue" {
  import { type Component } from "vue";

  const component: Component;
  export default component;
}

declare module "@/generated/*.vue" {
  import { type Component } from "vue";

  const component: Component;
  export default component;
}
