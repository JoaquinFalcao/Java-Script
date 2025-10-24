alert("Bienvenidos a mi sitio.")

let avanzar = ("¿Está seguro de querer avanzar?");
let respuesta_0 = confirm(avanzar)
if (respuesta_0){
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita" 
}
else{
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita" 
}

let nombre = ("Ingrese su nombre: ");
let respuesta_1 = prompt(nombre)
document.querySelector("h1").innerText = "Bienvenido " + respuesta_

let edad = ("Ingrese su edad: ");
let respuesta_2 = prompt(edad)
if (respuesta_2 < 18){
    let ocultar = document.querySelector(".container-general")
    ocultar.style.display = "none"
    let mostrar = document.querySelector(".accesoDenegado")
    mostrar.style.display = ""
}
else{
}

let programacion = ("¿Te gusta la programación?");
let respuesta_3 = confirm(programacion)
if (respuesta_3){
    document.querySelector(".background-img").innerHTML = "<img src='./img/programmer.jpeg' alt='' >"
}
else{
    document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg' alt='' >"
}

let ruta = ("Ingresa la ruta de la imagen: ")
let respuesta_4 = prompt(ruta)
let avatar = document.querySelector(".avatar")
avatar.src = respuesta_4

let pelicula  = prompt("Decime una película");
let director  = prompt("Decime el director");
let duracion  = Number(prompt("Decime la duración (en minutos)"));
let actor     = prompt("Decime un actor");

let peli = {
  nombre: pelicula,
  director: director,
  duracion: duracion,
  actor: actor
}

let contenedor = document.querySelector("#pelicula");
let lista = contenedor.querySelector("ul");

contenedor.style.display = "block";
lista.style.display = "block";

lista.innerHTML =
  "<li>Nombre: "   + peli.nombre   + "</li>" +
  "<li>Director: " + peli.director + "</li>" +
  "<li>Duración: " + peli.duracion + "</li>" +
  "<li>Actor: "    + peli.actor    + "</li>";