function ClaseDos() {
    let miNombre = "Juan Paz"
    let mensaje = `Hola a todos, mi nombre es ${miNombre}`;
    let mensajeParaHacer = `Aca podemos subir los contenidos del resumen en formato de pagina web :)`
    return (
        <>
            <div>
                <div className="container">
                    <h1>Con ECMA Script 6</h1>
                    <p>{mensaje}</p>
                    <p>{mensajeParaHacer}</p>
                </div>
            </div>
        </>
    )
}

export default ClaseDos