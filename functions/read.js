const fs = require("fs");

const readF = () => JSON.parse(fs.readFileSync("./baseDeDatos.json", "utf-8")); 

module.exports = readF;
