"use strict";

function main() {
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  function calculadora(unOperador) {
    var op = unOperador;
    var operandoUno = document.getElementById('operando-uno');
    var operandoDos = document.getElementById('operando-dos');
    op.onclick = function () {
      var calculo = new Promise(function (res, rej) {
        if (chequearOperandos(operandoUno, operandoDos)) {
          var calcular = {
            numUno: Number(operandoUno.value),
            numDos: Number(operandoDos.value),
            reset: function reset() {
              operandoUno.value = '';
              operandoDos.value = '';
            },
            operacion: op.id
          };
          res(calcular);
        } else {
          var error = {
            mensaje: 'Antes de realizar la operacion, rellene los dos campos porfavor.'
          };
          rej(new Error(error.mensaje));
        }
      });
      calculo.then(function (valor) {
        var divResultado = document.getElementById('resultado-contenedor');
        var resultado = realizarOperacion(valor); // <- Si se hace la division, deberia chequear si hay un error.
        if (resultado.estado) {
          throw new Error(resultado.mensaje);
        } else {
          var displayResultado = displayOperacion(valor);
          divResultado.innerHTML = "\n            <p class=\"alert alert-success\">\n              ".concat(displayResultado, " ").concat(resultado, "\n            </p>");
          valor.reset();
        }
      })["catch"](function (error) {
        console.log(error.message);
        var divResultado = document.getElementById('resultado-contenedor');
        divResultado.innerHTML = "\n          <p class=\"alert alert-danger\">\n            ".concat(error.message, " \n          </p>"); // <- y mostrar el error en este evento. Pero sale undefined
      });
    };
  }

  function realizarOperacion(_ref) {
    var operacion = _ref.operacion,
      numUno = _ref.numUno,
      numDos = _ref.numDos;
    var operaciones = {
      suma: function suma(a, b) {
        return a + b;
      },
      resta: function resta(a, b) {
        return a - b;
      },
      multiplicacion: function multiplicacion(a, b) {
        return a * b;
      },
      division: function division(a, b) {
        return chequearDivision(a, b);
      }
    };
    return operaciones[operacion](numUno, numDos);
  }
  function displayOperacion(_ref2) {
    var operacion = _ref2.operacion,
      numUno = _ref2.numUno,
      numDos = _ref2.numDos;
    var display = {
      suma: function suma(a, b) {
        return "".concat(a, " + ").concat(b, " =");
      },
      resta: function resta(a, b) {
        return "".concat(a, " - ").concat(b, " =");
      },
      multiplicacion: function multiplicacion(a, b) {
        return "".concat(a, " * ").concat(b, " =");
      },
      division: function division(a, b) {
        return "".concat(a, " / ").concat(b, " =");
      }
    };
    return display[operacion](numUno, numDos);
  }
  function chequearDivision(numUno, numDos) {
    var nan = numUno / numDos;
    var infinity = numUno / numDos;
    if (isNaN(nan) || infinity === Infinity) {
      var error = {
        estado: true,
        mensaje: "No se puede realizar la operacion ".concat(numUno, "/").concat(numDos)
      };
      return error;
    } else {
      return numUno / numDos;
    }
  }
  // utilidades
  function chequearOperandos(opUno, opDos) {
    return opUno.value && opDos.value;
  }
  calculadora(suma);
  calculadora(resta);
  calculadora(multiplicacion);
  calculadora(division);
}
main();