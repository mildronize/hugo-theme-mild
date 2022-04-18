const yaml = require("yaml");
const fs = require("fs");

const source = process.argv[2];
const destination = process.argv[3];
const webpackOutputPath = process.argv[4];

const file = fs.readFileSync(source, "utf8");
const data = yaml.parse(file);
// Use root path for local dev instead
data.baseURL = '/';
// Setup prefix path for webpack output for local dev
data.params.webpackOutputPath = webpackOutputPath || "assets";
fs.writeFileSync(destination, yaml.stringify(data), "utf8");
