//V1.0 Jorge Bernat.  El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(nombreAmigo == false){
        alert("Debes ingresar el nombre de amigo");
        return;
    }
   amigo.push(nombreAmigo);
   inputAmigo.value = "";
   inputAmigo.focus();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigo.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1} - ${amigo}`;
        listaAmigos.appendChild(item);
    });
}