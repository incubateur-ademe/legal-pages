import { sync as glob } from "glob";
import path from "path";

import { build } from "./builder.js";
import { SCRIPTS_DIR } from "./helper.js";

const srcFolder = path.resolve(SCRIPTS_DIR, "../src");
const files = glob(`${srcFolder}/*.md`, {
  absolute: true,
});

console.info(`🏗️ Building ${files.length} files...`);
files.forEach(file => console.info(`  | ${path.join("html", path.parse(file).name + ".html")}`));

await build(files);
