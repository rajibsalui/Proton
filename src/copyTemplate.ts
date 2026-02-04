import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function copyTemplate(template, targetDir, projectName) {
  const templateDir = path.join(__dirname, "..", "templates", template);

  await fs.copy(templateDir, targetDir);

  const pkgPath = path.join(targetDir, "package.json");
  const pkg = await fs.readJson(pkgPath);

  pkg.name = projectName;
  await fs.writeJson(pkgPath, pkg, { spaces: 2 });
}