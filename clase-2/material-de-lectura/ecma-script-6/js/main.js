    /*En ES5*/ 
    {   
        var miNombre = "Juan Paz";
        var mensajeVar = "Hola a todos, me llamo " +miNombre+", un gusto conocerlos.";
        console.log(mensajeVar);
    }

    /*En ES6*/
    {
        let miNombre = "Juan Paz"
        let mensajeLet = `Hola a todos, me llamo ${miNombre}, un gusto conocerlos.`;
        console.log(mensajeLet)
    }

    let unaVariable = "Las variables definidas con `let`, pueden ser inicializadas con un valor y pueden redeclarar un valor."

const unaConstante = "Una constante no puede cambiar si valor una ves que la inicializamos.";

console.log(unaVariable);
console.log(unaConstante);

unaVariable = "Tranquilamente, aca podemos redeclar un nuevo valor para la variable LET, puede ser mismo un String, un Number, un Boolean, etc."

// unaConstante = "Si intentamos cambiar el valor de la constante, la consola nos mostrar aun mensaje de error"