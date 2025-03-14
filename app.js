// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];   //Variable con array vacia

function agregarAmigo () {
    let entrada = document.getElementById("amigo");  //Variable que usa la entrada.
    let nombre = entrada.value.trim();  //Variable que tiene el valor de "entrada" y quita los espacios con trim.
    let lista = document.getElementById("listaAmigos");  //Variable que usa la lista de amigos.
    if (nombre === "") {  //Compara valor y tipo de dato.
        alert("Por favor, inserte un nombre.");  //Mensaje de error.
        return;
    }

    amigos.push(nombre);  //Agrega un nombre al final del array (amigos)
    entrada.value = "";  //Limpia el valor de la entrada 

    console.log(amigos);
}









