export default function Ingredients({ ingredients }) {
  console.log(ingredients);
  return (
    <div className="ingredients">
      <h3>Ingredientes</h3>
      <ul>
        {ingredients.map((ing, idx) => (
          <li key={idx}>
            {ing.name} - {ing.amount} - {ing.measurement}
          </li>
        ))}
      </ul>
    </div>
  );
}
