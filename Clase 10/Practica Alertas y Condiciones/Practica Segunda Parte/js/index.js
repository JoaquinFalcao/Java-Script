let numero_1 = ("Ingresa un numero: ")
let resultado_1 = prompt(numero_1)

let numero_2 = ("Ingresa otro numero: ")
let resultado_2 = prompt(numero_2)

let multiplicar = function (num_1, num_2){
    let res_3 = num_1 * num_2
    return("El resultado de multiplicar " + num_1 + " y " + num_2 + " es:" + res_3 + " .")
}
console.log(multiplicar(resultado_1, resultado_2))





let nacionalidad = ("Donde naciste?")
let resultado_3 = prompt(nacionalidad)

let profesion = ("Cual es tu profecion?")
let resultado_4 = prompt(profesion)

let kilometros = ("Cuantos KMs caminas por dia?")
let resultado_5 = prompt(kilometros)

let filosofoHipster = function(nacionalidad,profesion, kilometros){
    if (nacionalidad == "Argentina" && profesion == "Musico" && kilometros >= 2){
        return("Soy un filósofo hipster")
    }
    else {
        return("Aún no soy filósofo hipster")
    }
}
console.log(filosofoHipster(resultado_3, resultado_4, resultado_5))