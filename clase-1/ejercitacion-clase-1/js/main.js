async function main() {
    const spinner = document.getElementById("spinner-container");
    const form = document.getElementById("form-contact");
    const tipoSeguro = document.getElementById("tipo-seguro");

    /*Creo una promesa que simplemente se resuelve despues de 3000ms*/
    async function finalizarSpinner() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res();
            }, 3000);
        })
    }
    /*Creamos el evento del formulario que se va a ejecutar cuando carguemos los datos.*/
    function eventoFormulario(evento) {
        evento.preventDefault();
        const formData = new FormData(form);

        const nombre = formData.get("nombre");
        const apellido = formData.get("apellido");
        const dni = formData.get("dni");
        const email = formData.get("email");
        const telefono = formData.get("telefono");
        const tipoSeguro = formData.get("tipo-seguro");

        /*creamos una referencia al modal de BS para agregar el contenido*/
        var myModal = new bootstrap.Modal(document.getElementById('datos-cargados'));
        myModal.show();

        const resumen = `
        Nombre y Apellido: ${nombre} ${apellido}
        DNI: ${dni}
        Email: ${email}
        Teléfono: ${telefono}
        Tipo de Seguro: ${tipoSeguro}
        `;
        console.log(resumen)
    }
    /*
        Creamos un evento para el select del formulario
        guarda en una variable el valor de la opcion seleccionada 
        y lo utilizamos como clave para acceder al indice del objeto mostrarMensaje
    */
    function eventoSelect(evento) {
        const valor = evento.target.value;
        const mostrarMensaje = {
            valorSeleccionado: document.getElementById("valor-seguro"),
            basico: function () {
                this.valorSeleccionado.innerHTML = `
                <div class="alert alert-info">
                    <strong>Seguro Seleccionado:</strong> Basico $500 .
                </div>`;
            },
            intermedio: function () {
                this.valorSeleccionado.innerHTML = `
                <div class="alert alert-info">
                    <strong>Seguro Seleccionado:</strong> Intermedio $1000 .
                </div>`;
            },
            premium: function () {
                this.valorSeleccionado.innerHTML =`
                <div class="alert alert-info">
                    <strong>Seguro Seleccionado:</strong> Premium $1500 .
                </div>`;
            }
        }
        mostrarMensaje[valor]();
    }
    /*
        Esperamos que se resuelva la promesa, y en caso de detectar un error, 
        finalizamos la ejecucion de la funcion main
    */
    try {
        await finalizarSpinner();
    } catch (err) {
        console.log(err);
        return;
    }
    spinner.style.visibility = "hidden";
    form.style.visibility = "visible";
    tipoSeguro.addEventListener("change", eventoSelect);
    form.addEventListener("submit", eventoFormulario);
}
/* Funcion que se encarga de resetar el formulario cuando se recarga la pagina*/
function resetForm() {
    const form = document.getElementById("form-contact");
    window.addEventListener("load", async () => {
        await form.reset();
    })
}
/* Funcion que se encarga de controlar el incrementro/decremento del input type=number 
que viene por defecto*/
function controllWheel() {
    const dni = document.getElementById("dni");

    dni.addEventListener("wheel", (e) => {
        e.preventDefault();
    });
}
main();
controllWheel();
resetForm();