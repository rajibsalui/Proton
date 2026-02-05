import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function copyTemplate(template: string, targetDir: string, projectName: string) {
  const templateDir = path.join(__dirname, "..", "templates", template);

  await fs.copy(templateDir, targetDir);

  const pkgPath = path.join(targetDir, "package.json");
  const pkg = await fs.readJson(pkgPath);

  pkg.name = projectName;
  await fs.writeJson(pkgPath, pkg, { spaces: 2 });
}