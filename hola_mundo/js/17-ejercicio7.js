'use strict'

//Tabla de multiplicar de un número introducido por pantalla

var numero = parseInt(prompt("Introduce un número para multiplicar", 1));

document.write("<h1>Tabla del "+ numero + "</h1>");
for(var i = 1; i <= 10; i++){
    var multicacion = numero * i;
    document.write(numero + " x " + i + " = " + multicacion + "<br/>");
}
