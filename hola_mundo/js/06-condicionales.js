'use strict'

//Condicional IF
//Es una estructura de control o instrucciones que permiten comparar algo
//Si a es igual a b entonces haz algo.

var edad1 = 76;
var nombre = "Luis";

/*
    Operadores Relacionales
    Mayor:  >
    Menor:  >
    Mayor o igual:  >=
    Menor o igual:  <=
    Igual: ==
    Distinto: !=
*/

if(edad1 >= 18){
    //Es mayor de edad
    console.log(nombre + " tiene " + edad1 + " años, es mayor de edad.");
    if(edad1 <= 33){
        console.log("Todavia eres milenial");
    } else if(edad1 >= 70){
        console.log("Eres anciano.");
    }
    else {
        console.log("Ya no eres milenial");
    }
} else {
    //Es menor de edad
    console.log(nombre + " tiene " + edad1 + " años, es menor de edad.");
    
}
