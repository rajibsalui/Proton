import inquirer from "inquirer";
import path from "path";
import { copyTemplate } from "./copyTemplate.js";
import { installDeps } from "./installDeps.js";

export async function createApp(projectName: string) {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Choose language:",
      choices: ["TypeScript", "JavaScript"]
    },
    {
      type: "list",
      name: "database",
      message: "Choose database:",
      choices: [
        { name: "MongoDB (Mongoose)", value: "mongo" },
        { name: "PostgreSQL (Prisma)", value: "prisma" },
        
      ]
    },
    {
      type: "confirm",
      name: "install",
      message: "Install dependencies now?",
      default: true
    }
  ]);

  const template = resolveTemplate(answers);

  const targetDir = path.resolve(process.cwd(), projectName);

  await copyTemplate(template, targetDir, projectName);

  if (answers.install) {
    installDeps(targetDir);
  }

  console.log("\n✅ Project created successfully\n");
  console.log(`cd ${projectName}`);
  console.log(`npm run dev`);
}

function resolveTemplate({ language, database }) {
  if (language === "TypeScript" && database === "mongo") return "ts-mongo";
  if (language === "TypeScript" && database === "prisma") return "ts-prisma";
  if (language === "JavaScript" && database === "mongo") return "js-mongo";
  if (language === "JavaScript" && database === "prisma") return "js-prisma";
  if (language === "TypeScript") return "ts-base";
  return "js-base";
}