fetch("https://rickandmortyapi.com/api/character")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    let characterList = document.querySelector(".characterList")
    let characters = ""
    for (let i = 0; i < data.results.length; i++){
        console.log(data.results[i]);
        characters += `<article> <img src="${data.results[i].image}" alt="${data.results[i].name}"> <p>Name: ${data.results[i].name}</p> <p>Status: ${data.results[i].status}</p> </article>`
    }
    characterList.innerHTML = characters
})
.catch(function(error){
    console.log("Error: " + error);
})