/*Parte 1 del ejercicio*/
function suma(a, b, callback) {
    let c = a + b;
    callback(c);
}

function mostrarResulado(c) {
    const parrafo = document.getElementById("resultado")
    parrafo.innerHTML = `El resultado de la suma es ${c}`
}

suma(5, 5, mostrarResulado);

/*Parte 2 del ejercicio - Usando Promises*/
/*Envuelvo todo el codigo para evitar sobreescritura de la funcion suma*/
{
    function suma(a, b) {
        return new Promise((res, rej) => {
            let c = a + b;
            if (c) {
                res(c);
            } else {
                rej("Error: No se pudo realizar la suma correctamente");
            }
        });
    }
    function mostrarResuladoPromesa(resultado) {
        const resultadoPromesa = document.getElementById("resultadoPromesa");
        resultadoPromesa.innerHTML = `El resultado de la suma es ${resultado}`;
    }

    function mostrarErrorPromesa(error) {
        const errorPromesa = document.getElementById("errorPromesa");
        errorPromesa.innerHTML = error
    }
    suma(20, 5)
        .then(mostrarResuladoPromesa)
        .catch(mostrarErrorPromesa);
    suma(5)
        .then((resultado) => {
            const resultadoPromesa = document.getElementById("resultadoPromesa");
            resultadoPromesa.innerHTML = `El resultado de la suma es ${resultado}`;
        })
        .catch((error) => {
            const errorPromesa = document.getElementById("errorPromesa");
            errorPromesa.innerHTML = error
        })
        .then(mostrarResuladoPromesa)
        .catch(mostrarErrorPromesa);
}