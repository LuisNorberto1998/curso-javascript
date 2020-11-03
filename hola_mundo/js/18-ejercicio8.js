"use strict";

/**
 * Hacer una calculadora
 * 1. Pida dos números por pantalla
 * 2. Vuelva a pedir número
 * 3. En el cuerpo de la pagina en una alerta y por consola el resultado de sumar, restar, multiplicar, dividir, etc.
 */

var numero1 = parseInt(prompt("Introducir el número 1: ", 0));
var numero2 = parseInt(prompt("Introducir el número 2: ", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1 || isNaN(numero2))) {
    numero1 = parseInt(prompt("Introducir el número 1: ", 0));
    numero2 = parseInt(prompt("Introducir el número 2: ", 0));
}

var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" 
              + "La resta es: " + (numero1 - numero2) + "<br/>"
              + "La multiplicación es: " + (numero1 * numero2) + "<br/>"
              + "La división es: " + (numero1 / numero2) + "<br/>"
              + "El residuo es: " + (numero1 % numero2) + "<br/>"

var resultadoCMD = "La suma es: " + (numero1 + numero2) + "\n" 
              + "La resta es: " + (numero1 - numero2) + "\n"
              + "La multiplicación es: " + (numero1 * numero2) + "\n"
              + "La división es: " + (numero1 / numero2) + "\n"
              + "El residuo es: " + (numero1 % numero2) + "\n"

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
