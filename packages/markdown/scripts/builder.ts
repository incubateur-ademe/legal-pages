import fs from "fs";
import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import path from "path";

import { SCRIPTS_DIR } from "./helper.js";

marked.use(
  {
    gfm: true,
  },
  gfmHeadingId(),
);

const htmlDist = path.resolve(SCRIPTS_DIR, "../html");

export const build = async (files: string[]) => {
  for (const file of files) {
    const { name } = path.parse(file);
    const content = await fs.promises.readFile(file, "utf-8");

    const html = marked(content) as string;

    const newPath = path.resolve(htmlDist, `${name}.html`);
    await fs.promises.writeFile(newPath, html);
  }
};
