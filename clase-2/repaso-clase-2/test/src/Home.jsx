import {Link} from "react-router-dom";

function About() {
  return (
    <div>
      ¡Bienvenido a la página principal!
      <br />
      <Link to="/about">Ir a la página Acerca de</Link>
      <br />
      <Link to="/contact">Ir a la página de Contacto</Link>
    </div>
  );
}

export default About;
