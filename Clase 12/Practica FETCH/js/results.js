let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)

let resultado = queryStringObj.get("buscador")

console.log(resultado)

fetch(`https://rickandmortyapi.com/api/character/?name=${resultado}`)

.then(function(res){
    return res.json()
})

.then(function(datos){
    console.log(datos);
    let characters = ""
    for (let i = 0; i < datos.results.length; i++){
        console.log(datos.results[i]);
        characters +=
        `<article>
        <img src="${datos.results[i].image}" alt="${datos.results[i].name}">
        <p>Name: ${datos.results[i].name}</p>
        <p>Status: ${datos.results[i].status}</p>
        </article>`
    }
    let personaje = document.querySelector(".search-results")
    personaje.innerHTML = characters
})

.catch(function(error){
    console.log("Error: " + error);
})