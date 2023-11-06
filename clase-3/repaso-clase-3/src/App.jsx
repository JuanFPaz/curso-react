import data from "./data/data.js";
import Recipe from "./components/Recipe.jsx";
import "./App.css";

function App() {
  return (
    <>
      <header className="header"><h1>Recetas</h1></header>
      <main className="container">
        {data.map((recipe) => (
          <Recipe {...recipe} key={recipe.id}/>
        ))}
      </main>
    </>
  );
}

export default App;
