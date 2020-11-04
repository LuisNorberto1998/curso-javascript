'use strict'

var texto = "Hola wenas wenas, soy variable global xD";
var numero = 2;

function holaMundo(texto){
    var hola_mundo = "Texto dentro de función";
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

holaMundo(texto);