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