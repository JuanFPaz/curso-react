class Saludo{
    constructor(){
        this.saludo = 'Hola a todos!';
        this.miau = 'asd';
    }
    getSaludo(){
        return this.saludo;
    }
}

export function saludo(){
    const saludo = new Saludo()
    return saludo.getSaludo()
}

console.log(saludo())
