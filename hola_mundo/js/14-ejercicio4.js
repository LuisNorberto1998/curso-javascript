'use strict'

/**
 *  Mostrar todos los números impares que hay entre dos números introducitos por el usuario
 */

var numero1 = parseInt(prompt("Introducir el primer número", 0));
var numero2 = parseInt(prompt("Introducir el segundo número", 0));

while(numero1 < numero2){
    numero1++;

    if(numero1%2 != 0){
        console.log("El + " + numero1 + " es impar.")
    }
}