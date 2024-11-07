#!/usr/bin/env node
import prompt from "prompts";
import chalk from "chalk";
import { execSync } from "child_process";

console.log(chalk.bgBlueBright.black.bold("create-many-app"));

async function initProject() {
  const response = await prompt({
    type: "select",
    name: "tool",
    message: "请选择构建工具",
    choices: [
      { title: chalk.green("Vite"), value: "vite" },
      { title: chalk.red("Farm"), value: "farm" },
      { title: chalk.yellow("Rspack"), value: "rspack" },
      { title: chalk.blueBright("Mako"), value: "mako" },
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

initProject();
