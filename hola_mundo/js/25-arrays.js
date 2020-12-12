"use strict";

//Arrays, Arreglos, Matrices
var nombre = "Luis Norberto";
var nombres = [
    "Luis Norberto",
    "Yoselin Canales",
    "Datos de prueba",
    23,
    false,
    true,
];

var lenguajes = new Array(
    "PHP",
    "JS",
    "Python",
    "Java",
    "Dart",
    "C++",
    "C#",
    "Pascal",
    "COBOL"
);

// var lenguajes_contar = lenguajes.length;
// var elemento = parseInt(
//     prompt(
//         "Que elemento del número total (0-" +
//             lenguajes_contar +
//             ") del array quieres?",
//         0
//     )
// );

// if (elemento >= lenguajes_contar) {
//     alert("Introduce el número correcto, menor que " + lenguajes_contar);
// } else {
//     alert("El usuario seleccionado es: " + nombres[elemento]);
// }

document.write("<h1>Los lenguajes de programación del 2020</h1>");
document.write("<ul>");

// for (var i = 0; i < lenguajes.length; i++) {
//     document.write("<li>" + lenguajes[i] + "</li>");
// }

// lenguajes.forEach((elemento, indice, array) => {
//     document.write("<li>" + indice + " - " + elemento + "</li>");
// });

for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");
