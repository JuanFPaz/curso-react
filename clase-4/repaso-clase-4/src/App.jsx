import State from "./introduccion-state/State";
import InputState from "./Input-state/InputState";
import "./App.css";

function App() {
  //Ejemplo Statefull:
  console.log("Se renderiza el componente App con un estado");
  return (
    <main>
      <State></State>
      <InputState></InputState>
    </main>
  );
}

export default App;
