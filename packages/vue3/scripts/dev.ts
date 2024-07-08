import { watch } from "chokidar";
import path from "path";

import { build } from "./builder.js";
import { SCRIPTS_DIR } from "./helper.js";

const watchDir = path.resolve(SCRIPTS_DIR, "../src/*.md");

console.clear();
await import("./build.js");
console.log();
console.info(`🚀 Watching ${watchDir} for changes...`);
watch(watchDir).on("change", file => {
  console.log(`🔄 File ${path.basename(file)} has been changed`);
  void build([file]);
});
