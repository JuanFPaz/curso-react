import Instructions from "./Instructions";
import Ingredients from "./Ingredients";

export default function Recipe({ name, pic, ingredients, steps }) {
  return (
    <article className="recipe">
      <h2>{name}</h2>
      <div className="img-ingredients">
        <img src={pic} alt={name}/>
      </div>
      <Ingredients ingredients={ingredients}></Ingredients>
      <Instructions title="Instrucciones" steps={steps} />
    </article>
  );
}
