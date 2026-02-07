import inquirer from "inquirer";
import path from "node:path";
import { copyTemplate } from "./copyTemplate";
import { installDeps } from "./installDeps";

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
        { name: "PostgreSQL (Prisma)", value: "postgres" },
        
      ]
    },
  ]);

  const template = resolveTemplate(answers as { language: string; database: string });

  const targetDir = path.resolve(process.cwd(), projectName);

  await copyTemplate(template, targetDir, projectName);

  await installDeps(targetDir); 
  

  console.log("\n✅ Project created successfully\n");
  console.log(`cd ${projectName}`);
  console.log(`npm run dev`);
}

function resolveTemplate({ language, database }: { language: string; database: string }) {
  if (language === "TypeScript" && database === "mongo") return "ts-mongo";
  if (language === "TypeScript" && database === "postgres") return "ts-postgres";
  if (language === "JavaScript" && database === "mongo") return "js-mongo";
  if (language === "JavaScript" && database === "postgres") return "js-postgres";
  return "js-mongo"; // default template
}