var objetoTemp = {
    id: id = 0,
    nombre: null,
    apellido: null,
    edad: null,
    email: null
};

var pila = [];

var app = this;
fetch('https://my-json-server.typicode.com/juanmanuellerda/RepoJSON/lista')
    .then(response => response.json())
    .then(lista => {
        console.log(lista);
        app.datos = lista;
    })

cargar = () => {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;

    registrarse.innerText = 'REGISTRADO';

    objetoTemp = {
        id: pila.length,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        email: email
    };


    pila.push(objetoTemp);
    console.log("Pila:");
    console.log(pila);
};

/*fetch('https://my-json-server.typicode.com/juanmanuellerda/RepoJSON/lista', {
    method: 'POST',
    body: JSON.stringify({
        id: '4', 
        nombre: 'Pedro',
        apellido: 'Sanchez',
        edad: '33',
        email: 'ps@gmail.com',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  */