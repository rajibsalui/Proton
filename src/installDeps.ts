import { execSync } from "node:child_process";

export async function installDeps(targetDir: string) {
  execSync("npm install", {
    cwd: targetDir,
    stdio: "inherit"
  });
  
  execSync("npm update", {
    cwd: targetDir,
    stdio: "inherit"
  });
}