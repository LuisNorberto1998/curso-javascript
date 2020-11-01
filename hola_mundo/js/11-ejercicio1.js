"use strict";

//Ejercicio Uno

/*
    Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales.
*/

var numero_uno = parseInt(prompt("Introduce el primer número", 0));
var numero_dos = parseInt(prompt("Introduce el segundo número", 0));

while(numero_uno <= 0 || numero_dos <= 0 || isNaN(numero_uno) || isNaN(numero_dos)){
    numero_uno = parseInt(prompt("Introduce el primer número", 0));
    numero_dos = parseInt(prompt("Introduce el segundo número", 0));

}

if (numero_uno == numero_dos) {
    alert("Los números son iguales");
} else if (numero_uno > numero_dos) {
    alert(numero_uno + " es mayor que " + numero_dos);
} else if (numero_dos > numero_uno){
    alert(numero_dos + " es mayor que " + numero_uno);
} else {
    alert("Introduce números correctos");
}
