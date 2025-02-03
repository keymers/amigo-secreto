// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para
//  luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

// El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán
//  en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de
//  forma aleatoria, mostrando el resultado en pantalla.

// Fucionalidades:

// Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible
//  al hacer clic en "Adicionar".

// Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista
//  y se mostrará en la página.

let amigos = [];

function limpiarCaja() {
  document.getElementById("amigo").value = "";
}

//Implementaremos una función para agregar amigos
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim(); // Obtenemos el valor del campo de texto y lo limpiamos de espacios en blanco

  if (nombre === "") {
    // Comprobamos si el campo de texto está vacío
    alert("Por favor, inserte un nombre."); // Si está vacío, mostramos una alerta
    return; // Salimos de la función
  }

  amigos.push(nombre); // Agregamos el nombre a la lista de amigos
  mostrarAmigos(); // Llamamos a la función para mostrar la lista de amigos
  limpiarCaja(); // Llamamos a la función para limpiar el campo de texto
}

// Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos"); // Obtenemos la lista HTML

  // Validación de elemento HTML
  if (!lista) { // Si el elemento no existe
    console.error("Error: No se encontró la lista de amigos"); // Mostramos un error en la consola
    return; // Salimos de la función
  }

  // Limpiar lista y manejar caso de lista vacía
  lista.innerHTML =
    amigos.length > 0
      ? amigos.map((amigo) => `<li class="list-item">${amigo}</li>`).join("") // Si la lista no está vacía, agregamos cada nombre como un elemento <li>
      : '<li class="empty-message">No hay amigos en la lista</li>'; // Si la lista está vacía, mostramos un mensaje indicando que no hay amigos 

  // Actualizar resultado del sorteo si está vacío
  const resultado = document.getElementById("resultado"); // Obtenemos el elemento HTML para mostrar el resultado del sorteo
  if (amigos.length === 0) resultado.innerHTML = ""; // Si la lista está vacía, limpiamos el resultado del sorteo
}

//
function sortearAmigo() {
  // Función para sortear un amigo
  if (amigos.length === 0) {
    // Comprobamos si la lista de amigos está vacía
    alert("¡Agrega amigos primero!"); // Si está vacía, mostramos una alerta
    return; // Salimos de la función
  }

  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteamos un amigo aleatorio de la lista
  document.getElementById("resultado").innerHTML = ` 
      <li class="resultado-item">🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong></li>
    `; // Mostramos el resultado en el elemento HTML con id "resultado"
}
