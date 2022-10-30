import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
// import { charmander } from './bases/03-clases'
// import { charmander } from './bases/04-injection'
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators2'
// import { age, name } from './bases/01-types';
// import { picatchu, pokemons } from './bases/02-objects';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    // <h1> Hola vite ${ charmander. name } ${ charmander. id }  </h1>
  
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

// const app = document.querySelector<HTMLDivElement>('#app')!;
// app.innerHTML = `
// <h1> Hello ${charmander. name} </h1>
// <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
  // <h1> Sal de ahí ${ pokemons.join(',') }</h1>