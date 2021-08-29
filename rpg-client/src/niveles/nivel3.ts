import * as acciones from '../utilidades/acciones'


export const iniciar = () => {
  acciones.accion();
  acciones.reset();
}

export const finalizar = (contexto: any) => {
  acciones.end();
}