"use strict";

/*Parte 1 del ejercicio*/
function suma(a, b, callback) {
    var c = a + b;
    callback(c);
}

function mostrarResulado(c) {
    var parrafo = document.getElementById("resultado");
    parrafo.innerHTML = "El resultado de la suma es " + c;
}

suma(5, 5, mostrarResulado);

/*Parte 2 del ejercicio - Usando Promises*/
/*Envuelvo todo el codigo para evitar sobreescritura de la funcion suma*/
{
    var _suma = function _suma(a, b) {
        return new Promise(function (res, rej) {
            var c = a + b;
            if (c) {
                res(c);
            } else {
                rej("Error: No se pudo realizar la suma correctamente");
            }
        });
    };

    var mostrarResuladoPromesa = function mostrarResuladoPromesa(resultado) {
        var resultadoPromesa = document.getElementById("resultadoPromesa");
        resultadoPromesa.innerHTML = "El resultado de la suma es " + resultado;
    };

    var mostrarErrorPromesa = function mostrarErrorPromesa(error) {
        var errorPromesa = document.getElementById("errorPromesa");
        errorPromesa.innerHTML = error;
    };

    _suma(20, 5).then(mostrarResuladoPromesa).catch(mostrarErrorPromesa);
    _suma(5).then(mostrarResuladoPromesa).catch(mostrarErrorPromesa);
}
