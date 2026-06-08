import mammoth from "mammoth";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const assetsRawDir = path.join(projectRoot, "assets_raw");
const plantFolders = fs.readdirSync(assetsRawDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

async function extractDocx(folderPath) {
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".docx"));
  if (files.length === 0) return "";
  const docxPath = path.join(folderPath, files[0]);
  const result = await mammoth.extractRawText({ path: docxPath });
  return result.value.trim();
}

async function main() {
  const results = {};
  for (const folder of plantFolders) {
    const folderPath = path.join(assetsRawDir, folder);
    const text = await extractDocx(folderPath);
    // Also get the actual docx filename for reference
    const docxFiles = fs.readdirSync(folderPath).filter(f => f.endsWith(".docx"));
    results[folder] = {
      docxFile: docxFiles[0],
      content: text
    };
    console.log(`\n========== ${folder} ==========`);
    console.log(text);
  }
  // Also save to a JSON file for reference
  fs.writeFileSync(
    path.join(projectRoot, "scripts", "extracted-content.json"),
    JSON.stringify(results, null, 2)
  );
}

main().catch(console.error);
