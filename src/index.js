#!/usr/bin/env node
import prompt from "prompts";
import chalk from "chalk";
import { execSync } from "child_process";
import { pastel, fruit, mind } from "gradient-string";

console.log(pastel("\n🎉 Create-Many-App !"));
console.log(
  fruit("\n⭐ project link : https://github.com/heygsc/create-many-app"),
);
console.log(mind("\n🎨 author : https://github.com/heygsc \n"));

async function chooseTool() {
  const response = await prompt({
    type: "select",
    name: "tool",
    message: "🚀 请选择构建工具",
    choices: [
      { title: chalk.green("Vite"), value: "vite" },
      { title: chalk.hex("#c44cac")("Farm"), value: "farm" },
      { title: chalk.hex("#ff8b00")("Rspack"), value: "rspack" },
      { title: chalk.hex("#929ef4")("Mako"), value: "mako" },
    ],
  });

  const tool = response.tool;
  switch (tool) {
    case "vite":
      execSync("npm create vite@latest", { stdio: "inherit" });
      break;
    case "farm":
      execSync("npm create farm@latest", { stdio: "inherit" });
      break;
    case "rspack":
      execSync("npm create rspack@latest", { stdio: "inherit" });
      break;
    case "mako":
      execSync("npm create mako@latest", { stdio: "inherit" });
      break;
    default:
      console.log(chalk.red("未知的构建工具"));
  }
}

chooseTool();
