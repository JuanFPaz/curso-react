const form = document.getElementById("contacto-form");
const valorSeguroSpan = document.getElementById("valor-seguro");
const tipoSeguro = document.getElementById("tipo-seguro");

tipoSeguro.addEventListener("change", () => {
    const valor = target.value;
    switch (valor) {
        case "basico":
            valorSeguroSpan.innerHTML = "$500"
            break;
        case "intermedio":
            valorSeguroSpan.innerHTML = "$1000";
            break;
        case "premium":
            valorSeguroSpan.innerHTML = "$1500";
            break;
    }
})
form.addEventListener("submit", (e) => {
    e.preventDefault();
    /*Obtener datos del formulario? */
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
    Telefono: ${telefono}
    Tipo de Seguro: ${tipoSeguro}
    `;

    alert(resumen);
    /*Agregar un modal con bootstrap para mostrar el alert.*/
    /*Crer una funcion asincrona para resetar la pagina.*/
})