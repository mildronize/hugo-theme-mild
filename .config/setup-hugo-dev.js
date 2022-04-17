const yaml = require("yaml");
const fs = require("fs");

const source = process.argv[2];
const destination = process.argv[3];

const file = fs.readFileSync(source, "utf8");
const data = yaml.parse(file);
data.baseURL = "/";
fs.writeFileSync(destination, yaml.stringify(data), "utf8");
