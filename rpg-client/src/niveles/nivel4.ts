import * as acciones from '../utilidades/acciones'
import { CONSTANTS } from '../utilidades/constants';


export const iniciar = () => {
  acciones.accion();
  acciones.reset();
  acciones.aparecerCultivo(
    CONSTANTS.HUERTO_LUGAR_H1, 
    CONSTANTS.HUERTO_CULTIVO_LECHUGA);
}

export const finalizar = (contexto: any) => {
  acciones.end();
}