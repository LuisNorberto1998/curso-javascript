"use strict";

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["Iron Man", "Capitan America", "Los Vengadores"];

var cine = [categorias, peliculas];

// peliculas.sort();
peliculas.reverse();
console.log(peliculas);
// console.log(cine[0][1]);
// console.log(cine[1][2]);

// var elemento = "";

// do {
//     elemento = prompt("Introduce tu pelicula");
//     peliculas.push(elemento);
// } while (elemento != "ACABAR");

// peliculas.pop();

var indice = peliculas.indexOf("Iron Man");

console.log(indice);

if (indice > -1) {
    peliculas.splice(indice, 1);
}

var peliculas_array = peliculas.join();

var cadena = "texto1 , texto2, texto3";
var cadena_array = cadena.split(", ");
