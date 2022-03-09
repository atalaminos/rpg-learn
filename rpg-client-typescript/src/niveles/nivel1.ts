import * as acciones from '../utilidades/acciones'


export const iniciar = () => {
  acciones.reset();
}

export const finalizar = (contexto: any) => {

  if ((Object.keys(contexto).length === 3) && 
    (contexto.manzanas === 10) && 
    (contexto.fresas === 5) && 
    (contexto.frutas === 15)
  ) {
    setTimeout(() => {
      acciones.enviarMensaje('¡Nivel superado!'), 1000
    });
  }

  acciones.end();
}