import { saludo } from './build/main';
import './App.css';

function App() {
  const saludar = saludo();

  return (
    <>
        <h1>{saludar}</h1>
        <p>Esta es mi primera app de React jasjsj</p>
    </>
  )
}

export default App;
