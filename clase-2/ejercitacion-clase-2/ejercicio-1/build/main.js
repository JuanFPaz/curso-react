"use strict";

function suma(a, b, callback) {
    var c = a + b;
    callback(c);
}

function mostrarResulado(c) {
    var parrafo = document.getElementById("resultado");
    parrafo.innerHTML = "El resultado de la suma es " + c;
}

suma(5, 5, mostrarResulado);
