export const pokemonIds = [1,20,30,34,66];
// export const pokemon = {
//     id:1,
//     name:'Picachu! ',
//     age:22
// }

//para hacer que una propiedad en el objeto exista o no se utiliza ? -> ejemplo age?: number;

export interface Pokemon{
    id:number;
    name:string;
    age: number;
}

export const picatchu:Pokemon = {
    id: 1,
    name: 'Pikatchu',
    age: 2
}

export const charmander: Pokemon = {
    id: 0,
    name: "Charmander",
    age: 1
}

// console.log({picatchu,charmander})
//.push sirve para insertar un nuevo elemento 'el + es para convertirlo a number el string'

// pokemonIds.push( +'1' )
// console.log(pokemonIds)

//Aquí indicamos que es un arreglo
export const pokemons: Pokemon[] = [];

pokemons.push(charmander, picatchu)

console.log({pokemons});

