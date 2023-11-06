export default function Instructions({ title, steps }) {
  return (
    <>
      <section className="instructions">
        <h3>{title}</h3>
        <ol>
          {steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>
    </>
  );
}
