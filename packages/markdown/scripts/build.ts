import { sync as glob } from "glob";
import path from "path";

import { build } from "./builder.js";
import { SCRIPTS_DIR } from "./helper.js";

const srcFolder = path.resolve(SCRIPTS_DIR, "../src");
const files = glob(`${srcFolder}/*.md`, {
  absolute: true,
});

console.info(`🏗️  ┬ Building ${files.length * 2} files...`);
files.forEach(file => console.info("   ├", path.join("html", path.parse(file).name + ".html")));
files.forEach((file, i) => console.info("  ", i < files.length - 1 ? "├" : "└", path.join("md", path.basename(file))));

await build(files);
