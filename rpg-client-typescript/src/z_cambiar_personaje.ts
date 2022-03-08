import { iniciar, finalizar } from './niveles/nivel2'
import { cambiarPersonajeMujer, cambiarPersonajeHombre } from './utilidades/acciones';
iniciar();

let cambio = true;

setInterval(() => {
  
  (cambio = !cambio) ? 
    cambiarPersonajeMujer() : 
    cambiarPersonajeHombre();

}, 1000);

