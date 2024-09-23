
const readF = require("./read.js");
const writeF = require("./write.js");

const cargarF = function (nombre = "null", apellido = "null", edad = "null", email = "null") {
    let data = readF();
    let obj = {
        id: data.length + 1,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        email: email
        };
    
    let data_tmp = data.concat(obj); 
    writeF(data_tmp);
    return data_tmp;
    };

module.exports = cargarF;
