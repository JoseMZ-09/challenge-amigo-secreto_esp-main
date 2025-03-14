// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];   //Variable con array vacia

function agregarAmigo () {
    let entrada = document.getElementById("amigo");  //Variable que usa la entrada.
    let nombre = entrada.value.trim();  //Variable que tiene el valor de "entrada" y quita los espacios con trim.
    if (nombre === "") {  //Compara valor y tipo de dato.
        alert("Por favor, inserte un nombre.");  //Mensaje de error.
        return;
    }

    amigos.push(nombre);  //Agrega un nombre al final del array (amigos)
    entrada.value = "";  //Limpia el valor de la entrada 
    actualizarListaAmigos ()
    console.log(amigos);
}

function actualizarListaAmigos () {
    let lista = document.getElementById("listaAmigos");  //Variable que usa la lista de amigos.
    lista.innerHTML = "";  //Limpia el contenido

    for (let i = 0; i < amigos.length; i++) {  //Recorre el array
        let elementosLista = document.createElement("li"); //Crea un elemento <li>
        elementosLista.innerText = amigos[i]; //Asigan el nombre. elementosLista (variable) .innerText (Asigna texto al elemento HTML) = amigos[i]; (El nombre de la lista en ese momento)
        lista.appendChild(elementosLista); //Agrega el elemento de la lista <li> a la lista en la lista del DOM. 
    }

}









