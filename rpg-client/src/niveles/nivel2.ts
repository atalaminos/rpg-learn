import * as acciones from '../utilidades/acciones'


export const iniciar = () => {
  acciones.accion();
  acciones.reset();
}

export const finalizar = (contexto: any) => {

  acciones.obtenerPosicion((x, y) => {

    console.log(x, y);

    if ((x >= 65) && (x <= 210) && (y >= 128) && (y <= 278)) {
      acciones.enviarMensaje('¡Nivel superado!')
    }
    
    acciones.end();
  });

}