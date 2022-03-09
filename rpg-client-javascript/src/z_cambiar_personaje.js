const {
  cambiarPersonajeMujer,
  cambiarPersonajeHombre
} = require('./utilidades/acciones');

let cambio = true;

setInterval(() => {
  
  (cambio = !cambio) ? 
    cambiarPersonajeMujer() : 
    cambiarPersonajeHombre();

}, 1000);

