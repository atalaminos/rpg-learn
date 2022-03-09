const {
  iniciar,
  finalizar
} = require('./niveles/nivel1');

iniciar();
/*
  Crea tres variables: 
    - manzanas con un valor 10
    - fresas con valor a 5
    - frutas como suma de las dos variables anteriores
*/

const manzanas = 10;
const fresas = 5;
const frutas = fresas + manzanas;

/* */
console.log({manzanas, fresas, frutas});


