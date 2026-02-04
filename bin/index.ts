#!/usr/bin/env node

import { createApp } from "../src/createApp";

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Please provide a project name.");
  console.log("Example: npx create-express-app my-api");
  process.exit(1);
}

createApp(projectName);