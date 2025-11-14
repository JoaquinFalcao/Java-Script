let miNombre = ("Joaquin")
let miNombreToString = JSON.stringify(miNombre)
localStorage.setItem("userName", miNombreToString)

let recuperoStorage = localStorage.getItem("userName")
let miNombreRecuperado = JSON.parse(recuperoStorage)

localStorage.clear()



let peliculasFavoritas = ["Cars", "Gigantes de acero", "Nemo"]
let peliculaFavorita = JSON.stringify(peliculasFavoritas[1])
localStorage.setItem("Pelicula Favorita", peliculaFavorita)

let recuperoPelicula = localStorage.getItem("Pelicula Favorita")
let peliculaFavoritaRecuperada = JSON.parse(recuperoPelicula)

localStorage.clear()



let peliculasJson = JSON.stringify(peliculasFavoritas)
localStorage.setItem("Favoritos", peliculaFavorita)




let recuperoArray = localStorage.getItem("Favoritos")
let recuperadoArray = JSON.parse(recuperoArray)

recuperadoArray.push("Moon")

let arrayRecuperadoToString = JSON.stringify(recuperadoArray)
localStorage.setItem("Favoritos", arrayRecuperadoToString)

 

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterIsComing = []

for (let i = 0; i < got.length; i++){
    if (got[i].ciudad === "Winterfell"){
        winterIsComing.push(got[i])
    }
}
console.log(winterIsComing)

let winterIsComingToString= JSON.stringify(winterIsComing)
localStorage.setItem("winterfell", winterIsComingToString)

console.log(localStorage)