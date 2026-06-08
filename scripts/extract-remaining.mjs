import mammoth from "mammoth";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const targets = [
  "Rough Bent",
  "Snowball Sand Verbena",
  "Red Baneberry"
];

async function main() {
  for (const name of targets) {
    const folder = path.join(projectRoot, "assets_raw", name);
    const files = fs.readdirSync(folder).filter(f => f.endsWith(".docx"));
    if (files.length === 0) {
      console.log(`=== ${name} ===\nNo docx found\n`);
      continue;
    }
    const docxPath = path.join(folder, files[0]);
    try {
      const result = await mammoth.extractRawText({ path: docxPath });
      console.log(`=== ${name} ===`);
      console.log(result.value.trim());
      console.log();
    } catch (e) {
      console.log(`=== ${name} ===\nERROR: ${e.message}\n`);
    }
  }
}

main().catch(console.error);
