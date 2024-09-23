const fs = require("fs");

const writeF = (new_obj) => fs.writeFileSync("./baseDeDatos.json", JSON.stringify(new_obj, null, 2)); 

module.exports = writeF; 
