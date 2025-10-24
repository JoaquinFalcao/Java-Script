let mensaje = "¿Vas a salir de tu casa?";
let resultado = confirm(mensaje);
if (resultado == true){
    alert( "Chequeá el pronóstico del tiempo antes de salir");
}
else{
    alert("Que bueno que te quedes. Va a llover mucho hoy.");
}


let respuesta_1nombre = "Cual es tu nombre?";
let respuesta_0 = prompt(nombre);
console.log(respuesta_0)


let edad = "Cual es tu edad?";
let respuesta_1 = prompt(edad);
console.log(respuesta_1)


let fanDeportes = "Te gustan los deportes?";
let respuesta_2 = confirm(fanDeportes);
console.log(respuesta_2)


alert("Muchas gracias " + respuesta_0 + " por responder nuestras preguntas.")


let ususario = {
    nombre: respuesta_0,
    edad: respuesta_1,
    fanDeportes: respuesta_2,
    deportistaProfesional: function(){
        if (respuesta_2){
            return("Si, soy fan de los deportes")
        }
        else{
            return("No soy tan fan aún de los deportes")
        }
    }
}
console.log(ususario.deportistaProfesional())


