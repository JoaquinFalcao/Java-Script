fetch("https://rickandmortyapi.com/api/character")
.then(function(response){
    return response.json()
})

.then(function(datos){
    console.log(datos);
    let characterList = document.querySelector(".characterList")
    let characters = ""
    for (let i = 0; i < datos.results.length; i++){
        console.log(datos.results[i]);
        characters +=
        `<article>
        <img src="${datos.results[i].image}" alt="${datos.results[i].name}">
        <a class="nombre" href="./detalle.html?identificador=${datos.results[i].id}">Name: ${datos.results[i].name}</a>
        <p>Status: ${datos.results[i].status}</p>
        </article>`
    }
    characterList.innerHTML = characters
})

.catch(function(error){
    console.log("Error: " + error);
})