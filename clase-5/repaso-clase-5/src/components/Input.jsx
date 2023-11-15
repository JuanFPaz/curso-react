function Input({ onAddTask }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const todoForm = new FormData(e.target);
      const description = todoForm.get('description');
      onAddTask(description);
      e.target.reset();
  
    };
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Nueva tarea: </label>
        <input type="text" name="description" id="description" placeholder="Comprar pan..." required />
        <input type="submit" value="Crear" />
      </form>
    );
  }
  
  export default Input;