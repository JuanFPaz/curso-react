# Repaso clase 5

- Vamos acrear una lista de TO-DO.

![Alt text](image.png)

- EL profe agrego el `aria-label` (si no usamos un label, usamos el attr aria label)

```jsx
//input:

function Input() {
  return (
    <form>
      <input type="text" name="input" id="input" placeholder/>
      <input type="submit" value="Crear" />
    </form>
  );
}
```

- Maquetado de estados

![Alt text](image-1.png)

- Boceto del objeto tarea :

```js

const task01 = {id:1,descripcion:"comprar agua mineral",completado: false}

//arreglo de tareas:
const tareas = [task01,task02,task03]
```
