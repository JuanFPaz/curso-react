async function main() {
    const spinner = document.getElementById("spinner-container");
    const form = document.getElementById("form-contact");
    const tipoSeguro = document.getElementById("tipo-seguro");


    async function finalizarSpinner() {
        /*Creo una promesa que simplemente se resuelve despues de 3000ms*/
        return new Promise((res, rej) => {
            setTimeout(() => {
                res();
            }, 3000);
        })
    }

    async function eventoFormulario(evento) {
        /*
            Creamos el evento del formulario que se va a ejecutar cuando carguemos y enviemos los datos.
            El parametro evento hace referencia al formulario que ejecuta el evento.
        */
        evento.preventDefault();
        const datosContact = document.getElementById("datos-contact");
        const datosModal = document.getElementById("datos-modal")
        const spinnerModal = document.getElementById("spinner-modal");
        async function cargarModal(unosDatos, unDiv) {
            /*creamos una referencia al modal de BS para agregar el contenido*/
            const modalDatos = new bootstrap.Modal(document.getElementById('datos-cargados'));
            modalDatos.show();
            unDiv.innerHTML = unosDatos;

            return new Promise((res) => {
                /*Establecemos un tiempo de espera de al menos 1500 ms para ejecutar el spinner del modal*/
                setTimeout(() => {
                    unDiv.innerHTML = unosDatos;
                    res();
                }, 1500)
            })
        }

        const formData = new FormData(form);
        const nombre = formData.get("nombre");
        const apellido = formData.get("apellido");
        const dni = formData.get("dni");
        const email = formData.get("email");
        const telefono = formData.get("telefono");
        const tipoSeguro = formData.get("tipo-seguro");

        const resumen = `
        <h2>Verifique sus Datos:</h2>
        <ul>
            <li><strong>Nombre y Apellido:</strong> ${nombre} ${apellido}</li>
            <li><strong>DNI:</strong> ${dni}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Teléfono:</strong> ${telefono}</li>
            <li><strong>Tipo de Seguro:<strong> ${tipoSeguro}</li>
        </ul>   
        `;

        /*Esperamos que se resuelva la promesa de cargarModal del evento
        y en caso de un error, finalizar la ejecucion de la funcion*/
        try {
            await cargarModal(resumen, datosModal);
        } catch (err) {
            console.error(err);
            return;
        }
        spinnerModal.style.display = "none";
        datosContact.style.display = "block";
    }

    function eventoSelect(evento) {
        /*
            Creamos un evento para el select del formulario
            guarda en una variable el valor de la opcion seleccionada 
            y lo utilizamos como clave para acceder al indice del objeto mostrarMensaje
        */
        const valor = evento.target.value;
        const mostrarMensaje = {
            valorSeleccionado: document.getElementById("valor-seguro"),
            basico: function () {
                this.valorSeleccionado.innerHTML = `
                <div class="alert alert-success">
                    <strong>Seguro Seleccionado:</strong> Basico $500 .
                </div>`;
            },
            intermedio: function () {
                this.valorSeleccionado.innerHTML = `
                <div class="alert alert-success">
                    <strong>Seguro Seleccionado:</strong> Intermedio $1000 .
                </div>`;
            },
            premium: function () {
                this.valorSeleccionado.innerHTML = `
                <div class="alert alert-success">
                    <strong>Seguro Seleccionado:</strong> Premium $1500 .
                </div>`;
            }
        }
        mostrarMensaje[valor]();
    }

    try {
        /*
            Esperamos que se resuelva la promesa, y en caso de detectar un error, 
            finalizamos la ejecucion de la funcion main
        */
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

function resetForm() {
    /* Funcion que se encarga de resetar el formulario cuando se recarga la pagina*/
    const form = document.getElementById("form-contact");
    window.addEventListener("load", async () => {
        await form.reset();
    })
}

function controllWheel() {
    /* 
        Funcion que se encarga de controlar el incrementro/decremento del input type=number 
        que viene por defecto
    */
    const dni = document.getElementById("dni");

    dni.addEventListener("wheel", (e) => {
        e.preventDefault();
    });
}
main();
controllWheel();
resetForm();