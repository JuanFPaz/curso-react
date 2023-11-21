# Routing

Mediante el ruteo podremos hacer que nuestra aplicación o sitio hecho en React
responda a diferentes urls y pueda navegar entre ellas. Como esta no es una
funcionalidad incluida en React utilizaremos una librería llamada React Router DOM y
sus distintos componentes.
React Router habilita el "enrutamiento del lado del cliente".
En los sitios web tradicionales, el navegador solicita un documento de un servidor
web, descarga y evalúa los activos de CSS y JavaScript, y presenta el HTML enviado
desde el servidor. Cuando el usuario hace clic en un enlace, comienza el proceso
nuevamente para una nueva página.
El enrutamiento del lado del cliente permite que su aplicación actualice la URL desde
un clic en un enlace sin realizar otra solicitud de otro documento desde el servidor. En
su lugar, su aplicación puede mostrar inmediatamente una nueva interfaz de usuario y
realizar solicitudes de datos fetch para actualizar la página con nueva información.
Esto permite experiencias de usuario más rápidas porque el navegador no necesita
solicitar un documento completamente nuevo o volver a evaluar los activos de CSS y
JavaScript para la página siguiente. También permite experiencias de usuario más
dinámicas con cosas como la animación.
