"use strict";

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

if (edad1 >= 18) {
  //Es mayor de edad
  console.log(nombre + " tiene " + edad1 + " años, es mayor de edad.");
  if (edad1 <= 33) {
    console.log("Todavia eres milenial");
  } else if (edad1 >= 70) {
    console.log("Eres anciano.");
  } else {
    console.log("Ya no eres milenial");
  }
} else {
  //Es menor de edad
  console.log(nombre + " tiene " + edad1 + " años, es menor de edad.");
}

/*
    OPERADORES LÓGICOS
    AND(Y): &&
    OR(O): ||
    Negación: ! 
*/

var year = 2018;
//Negación
if (year != 2016) {
    console.log("El año no es 2016, realmente es: " + year);
}

//AND
if (year >= 2000 && year <= 2020 && year != 2018) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}

//OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año aca en 8");
} else {
    console.log("Año no registrado");
}
