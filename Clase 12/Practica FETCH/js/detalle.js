let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)

let resultado = queryStringObj.get("identificador")

console.log(resultado)

fetch(`https://rickandmortyapi.com/api/character/${resultado}`)

.then(function(res){
    return res.json()
})

.then(function(datos){
    console.log(datos)
    let nombre = document.querySelector(".personaje")
    nombre.innerHTML = datos.name
    let status = document.querySelector(".status")
    status.innerHTML = datos.status
    let especie = document.querySelector(".especie")
    especie.innerHTML = datos.species
    let img = document.querySelector(".imagen")
    img.src = datos.image
})

.catch(function(error){
    console.log("Error: " + error);
})