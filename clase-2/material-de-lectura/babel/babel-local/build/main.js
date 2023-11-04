"use strict";

function suma(a, b, callback) {
    var c = a + b;
    callback(c);
}

suma(5, 6, function (c) {
    var parrafo = document.getElementById("resultado");
    parrafo.innerHTML = "El resultado de la suma es " + c;
});