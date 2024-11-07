#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.js
var import_prompts = __toESM(require("prompts"), 1);
var import_chalk = __toESM(require("chalk"), 1);
var import_child_process = require("child_process");
console.log(import_chalk.default.bgBlueBright.black.bold("create-many-app"));
function initProject() {
  return __async(this, null, function* () {
    const response = yield (0, import_prompts.default)({
      type: "select",
      name: "tool",
      message: "\u8BF7\u9009\u62E9\u6784\u5EFA\u5DE5\u5177",
      choices: [
        { title: import_chalk.default.green("Vite"), value: "vite" },
        { title: import_chalk.default.red("Farm"), value: "farm" },
        { title: import_chalk.default.yellow("Rspack"), value: "rspack" },
        { title: import_chalk.default.blueBright("Mako"), value: "mako" }
      ]
    });
    const tool = response.tool;
    switch (tool) {
      case "vite":
        (0, import_child_process.execSync)("npm create vite@latest", { stdio: "inherit" });
        break;
      case "farm":
        (0, import_child_process.execSync)("npm create farm@latest", { stdio: "inherit" });
        break;
      case "rspack":
        (0, import_child_process.execSync)("npm create rspack@latest", { stdio: "inherit" });
        break;
      case "mako":
        (0, import_child_process.execSync)("npm create mako@latest", { stdio: "inherit" });
        break;
      default:
        console.log(import_chalk.default.red("\u672A\u77E5\u7684\u6784\u5EFA\u5DE5\u5177"));
    }
  });
}
initProject();
