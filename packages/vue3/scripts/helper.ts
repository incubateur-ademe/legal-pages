import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
export const SCRIPTS_DIR = path.dirname(filename);
