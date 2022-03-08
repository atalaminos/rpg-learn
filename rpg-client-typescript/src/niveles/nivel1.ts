import * as acciones from '../utilidades/acciones'


export const iniciar = () => {
  acciones.reset();
  acciones.eliminarElementosDeInventario();
  acciones.abrirInventario();
}

export const finalizar = (contexto: any) => {

  for (let elemento in contexto) {
    acciones.agregarElementoAInventario(elemento, contexto[elemento])
  }

  if ((Object.keys(contexto).length === 3) && 
    (contexto.manzanas === 10) && 
    (contexto.fresas === 5) && 
    (contexto.frutas === 15)
  ) {
    setTimeout(() => {
      acciones.cerrarInventario();
      acciones.enviarMensaje('¡Nivel superado!'), 1000
    });
  }

  acciones.end();
}