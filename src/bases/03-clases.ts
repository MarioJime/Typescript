// export class Pokemon{

import axios from "axios";
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

//     public id: number;
//     public name: string;

//     constructor( id: number, name: string ){

//         this.id = id;
//         this.name = name;

//         console.log('constructor llamado');
//     }
// }

// export const charmander = new Pokemon(4, 'Charmander')

//El ejemplo comentado es la forma tradicional de hacerlo, en el siguiente ejemplo es la manera corta

export class Pokemon{

    get imaUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor( 
        public readonly id: number,
        public name: string, 
        // public imageUrl: string,
    ){}

    scream(){
        console.log(`${ this.name.toUpperCase() }!!!`)
        // this.speak();
    }

    speak(){
        console.log(`${ this.name },${ this.name }`);
    }

    async getMoves(){
        // const moves = 10;
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves);

        return data.moves;

    }
}

//readonly no podemos cambiar el valor 

export const charmander = new Pokemon(4, 'Charmander')

// console.log(charmander.imaUrl)
// charmander.scream();
// charmander.speak();

// charmander.id = 10;
// charmander.name = 'Mew'

charmander.getMoves();
// console.log( charmander.getMoves() );