import fs from "fs";
import { sync as glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";

import { SCRIPTS_DIR } from "./helper";

const srcFiles = fileURLToPath(import.meta.resolve("@incubateur-ademe/legal-pages-markdown/html/*.html"));
const files = glob(srcFiles, {
  absolute: true,
});

const generatedFolder = path.resolve(SCRIPTS_DIR, "../generated");

const vueTemplate = (propsName: string, content: string) => {
  const cleanPropsName = propsName.replace("_withBeta", "");
  const vueContent = content
    .replaceAll(/<div data-custom-element>{{(.+)}}<\/div>/gi, `<component :is="$1" v-bind="$props" />`)
    .replaceAll("{{cookieConsentButton}}", `<component :is="cookieConsentButton" v-bind="$attrs" />`);
  return `<script setup lang="ts">
/* eslint-disable */
import { type ${cleanPropsName}Props } from "@incubateur-ademe/legal-pages-markdown";
defineProps<${cleanPropsName}Props<object>>();
</script>
<template>
${vueContent}
</template>`;
};

export const build = async () => {
  console.log("🦄 ┬ Generate pre built components");
  let i = 0;
  for (const file of files) {
    i++;
    const { name } = path.parse(file);
    const content = await fs.promises.readFile(file, "utf-8");

    const renderedVueComponent = vueTemplate(name, content);

    const vueFile = `${name}.vue`;
    const newPath = path.resolve(generatedFolder, vueFile);
    console.log("  ", i < files.length ? "├" : "└", vueFile);
    await fs.promises.writeFile(newPath, renderedVueComponent);
  }
};

void build();
