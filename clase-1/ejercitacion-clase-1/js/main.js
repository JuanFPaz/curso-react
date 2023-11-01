const form = document.querySelector("#form-contact");
const inputDNI = document.querySelector("#dni");
const tipoSeguro = document.getElementById("tipo-seguro");

//creamos el evento para el select, cuando es seleccionada una opcion.
/*
    Obtenemos el valor del objeto que ejecuto el evento del select box
    Creamos un objeto con para manipular el 
*/
tipoSeguro.addEventListener("change", (e) => {
    const valor = e.target.value;
    const mostrarMensaje = {
        valorSeleccionado : document.getElementById("valor-seguro"),
        basico: function(){
            this.valorSeleccionado.innerHTML = "Basico: $500";
        },
        intermedio: function(){
            this.valorSeleccionado.innerHTML = "Intermedio: $1000";
        },
        premium: function(){
            this.valorSeleccionado.innerHTML = "Premium: $1500"; 
        }
    }

    mostrarMensaje[valor]();
})

// Creamos el evento submit del formulario, y evitamos que se envie por defecto
form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const formData = new FormData(form);

    const nombre = formData.get("nombre");
    const apellido = formData.get("apellido");
    const dni = formData.get("dni");
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const tipoSeguro = formData.get("tipo-seguro");


    const resumen = `
    Nombre y Apellido: ${nombre} ${apellido}
    DNI: ${dni}
    Email: ${email}
    Teléfono: ${telefono}
    Tipo de Seguro: ${tipoSeguro}
    `;
})

//Al recargar la pagina, automaticamente resetamos el formulario
window.addEventListener("load",()=>{
    form.reset();
})
//Evitamos el scroll por defecto de los Input type number
inputDNI.addEventListener("wheel",(e)=>{
    e.preventDefault();
})