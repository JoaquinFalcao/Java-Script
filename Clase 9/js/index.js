function rectangulo (b, h){
    return b * h
}
let resultado_rectangulo = rectangulo(10, 20);
console.log(resultado_rectangulo)


function triangulo (b,h){
    return (b * h) / 2
}
let resultado_triangulo = triangulo(15, 25);
console.log(resultado_triangulo)


function dolarHoy (p, d){
    return p * d
}
let resultado_dolarHoy = dolarHoy(20, 30)
console.log(resultado_dolarHoy)


function precioFinal (m){
    return m + m * 0.21
}
let resultado_precioFinal = precioFinal(25)
console.log(resultado_precioFinal)


function mitad (n){
    return n / 2
}
let resultado_mitad = mitad(30)
console.log(resultado_mitad)


function sumar (num1, num2){
    return num1 + num2
}
function multiplicar (num1, num2){
    return num1 * num2
}
function restar (num1, num2){
    return num1 - num2
}
function dividir (num1, num2){
    return num1 / num2
}
function calculadora (num1, num2, calculo) {
    return calculo(num1,num2)
}
console.log(calculadora(2,4,sumar));
console.log(calculadora(4,6,multiplicar));
console.log(calculadora(6,8,restar));
console.log(calculadora(8,10,dividir));


function siguiente (numero){
  return numero + 1;
}
function doble (numero){
  return 2 * numero;
}
function siguienteDelDoble (numero){
   return siguiente(doble(numero));
}
function anterior (numero){
    return numero - 1;
}
function triple (numero){
    return 3 * numero;
}
function anteriorDelTriple (numero){
    return anterior(triple(numero));
}
console.log(siguiente(2));
console.log(doble(4));
console.log(siguienteDelDoble(6));
console.log(anterior(2));
console.log(triple(4));
console.log(anteriorDelTriple(6));




let misDatos = {
    nombre: "Joaquin",
    apellido: "Falcao",
    dni: 47895969,
    edad: 18,
    comidasFavoritas: ["Fideos", "Hamburguesa", "Milianesa"],
    saludar: function (){
        return "Hola me llamo " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es " + this.comidasFavoritas[0] + ".";
    }
};
console.log(misDatos)
console.log(misDatos.saludar())


let auto = {
    marca: "Ram",
    modelo: "Rampage",
    anio: 2025,
    color: "negro",
    posicion: 0,
    avanzar: function (n){
        return this.posicion = this.posicion + n
    },
    retroceder: function(n){
        return this.posicion = this.posicion - n
    }
};
console.log(auto)
auto.avanzar(10)
auto.retroceder(5)
console.log(auto.posicion)


let nuevoAuto = {
    marca: "Ram",
    modelo: "Rampage",
    anio: 2025,
    color: "negro",
    posicion: 0,
    moverse: function (n){
        return this.posicion = this.posicion + n
    }
};
console.log(nuevoAuto)
nuevoAuto.moverse(10)
console.log(nuevoAuto.posicion)


let ironMan = {
    nobre: "IronMan",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(n){
        this.energia = this.energia - 10
        return "Poder Elegido de" + this.nombre + ": " + this.poderes[n] + ". Energía restante: " + this.energia + ".";
    }
};
let hulk = {
    nobre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(n){
        this.energia = this.energia - 10
        return "Poder Elegido de" + this.nombre + ": " + this.poderes[n] + ". Energía restante: " + this.energia + ".";
    }
};
console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(1))
console.log(ironMan.getPoder(2))
console.log(hulk.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(hulk.getPoder(2))
console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(1))
console.log(ironMan.getPoder(2))
console.log(hulk.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(hulk.getPoder(2))
console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(1))
console.log(ironMan.getPoder(2))
console.log(hulk.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(hulk.getPoder(2))
console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(1))




for (let i=0; i<5; i++){
    console.log("Practicando con el bucle for" + i);
};


let ganancias = [3213, -4829, 756, 8970, -3051, -8705, 1601, 2630, 5875,  -7301, 3041, 686]
let suma = 0
for(let i=0; i<ganancias.length; i++){
    suma= ganancias[i] + suma
}
console.log(suma)


let healingIsDifficult = ['Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away', 'Get Me', 'Im Not Important to You', 'Sober and Unkissed', 'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously']
for(let i=0; i<healingIsDifficult.length; i++){
    console.log(healingIsDifficult[i])
}


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
]
for(let i=0; i<got.length; i++){
    console.log("Soy" + got[i].nombre + " " + got[i].apellido + "de la ciudad." + got[i].ciudad)
}