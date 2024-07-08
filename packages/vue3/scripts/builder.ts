import fs from "fs";
import { sync as glob } from "glob";
import path from "path";
import { fileURLToPath } from "url";

import { SCRIPTS_DIR } from "./helper";

const srcFiles = fileURLToPath(import.meta.resolve("@incubateur-ademe/legal-pages-markdown/html/*.html"));
const files = glob(srcFiles, {
  absolute: true,
});

const generatedFolder = path.resolve(SCRIPTS_DIR, "../src/generated");

const vueTemplate = (propsName: string, content: string) => {
  const cleanPropsName = propsName.replace("_withBeta", "");
  return `<script setup lang="ts">
/* eslint-disable */
import { type ${cleanPropsName}Props } from "@incubateur-ademe/legal-pages-markdown";

defineProps<${cleanPropsName}Props>();
</script>
<template>
  ${content}
</template>
`;
};

export const build = async () => {
  for (const file of files) {
    const { name } = path.parse(file);
    const content = await fs.promises.readFile(file, "utf-8");

    const renderedVueComponent = vueTemplate(name, content);

    const newPath = path.resolve(generatedFolder, `${name}.vue`);
    await fs.promises.writeFile(newPath, renderedVueComponent);
  }
};

void build();
