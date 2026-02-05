import { execSync } from "node:child_process";

export function installDeps(targetDir: string) {
  execSync("npm install", {
    cwd: targetDir,
    stdio: "inherit"
  });
}