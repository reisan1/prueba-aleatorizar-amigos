// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array to store friends
let amigos = [];

// Get DOM elements
let inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Function to add friends
function agregarAmigo() {
    inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(nombre);
    inputAmigo.value = '';
    actualizarListaAmigos();
}

// Actualizar la lista de amigos
function actualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Aleatorizar la selección de amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear.');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `¡${amigoSorteado} es tu amigo secreto!`;
}

// Escuchar los clicks de los botones
document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);

// Agregar enter además del click al botón agregar amigo
inputAmigo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});
