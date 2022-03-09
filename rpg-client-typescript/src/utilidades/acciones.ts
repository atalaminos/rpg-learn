const axios = require('axios')


const HOST = 'http://localhost:3000';

const RUTAS = {
    RESET: "/reset",
    MENU_INVENTARIO: "/menu/inventario",
    MENU_INVENTARIO_ELEMENTO: "/menu/inventario/elemento",
    PERSONAJE_POSICION: "/personaje/posicion", 
    PERSONAJE_HOMBRE: "/personaje/hombre", 
    PERSONAJE_MUJER: "/personaje/mujer", 
    PERSONAJE_ACCION: "/personaje/accion", 
    PERSONAJE_MOVER_IZQUIERDA: "/personaje/mover/izquierda",
    PERSONAJE_GIRAR_IZQUIERDA: "/personaje/girar/izquierda",
    PERSONAJE_MOVER_DERECHA: "/personaje/mover/derecha",
    PERSONAJE_GIRAR_DERECHA: "/personaje/girar/derecha",
    PERSONAJE_MOVER_ARRIBA: "/personaje/mover/arriba",
    PERSONAJE_GIRAR_ARRIBA: "/personaje/girar/arriba",
    PERSONAJE_MOVER_ABAJO: "/personaje/mover/abajo",
    PERSONAJE_GIRAR_ABAJO: "/personaje/girar/abajo",
    PERSONAJE_COMPROBAR_CULTIVO: "/personaje/comprobar/cultivo",
    PERSONAJE_SEMBRAR: "/personaje/sembrar",
    PERSONAJE_RECOLECTAR: "/personaje/recolectar",
    HUERTO_APARECER: "/huerto/aparecer",
    HUERTO_DESAPARECER: "/huerto/desaparecer",
    MENSAJE: "/mensaje",
}

const acciones = [];
let exit = false;

const count = setInterval(() => {
  const accion = acciones.shift();
  
  if ((exit) && (acciones.length === 0)) {
    clearInterval(count);
  }

  if (accion) {
    accion.run(accion.args);
  }

}, 250);

export function reset() {
  acciones.push({
    run: resetPrivado
  })
}

function resetPrivado() {
  axios
  .post(`${HOST}${RUTAS.RESET}`, {})
  .then();
}

export function abrirInventario() {
  acciones.push({
    run: abrirInventarioPrivado
  })
}

function abrirInventarioPrivado() {
  axios
  .get(`${HOST}${RUTAS.MENU_INVENTARIO}`, {})
  .then()
}

export function cerrarInventario() {
  acciones.push({
    run: cerrarInventarioPrivado
  })
}

function cerrarInventarioPrivado() {
  axios
  .delete(`${HOST}${RUTAS.MENU_INVENTARIO}`, {})
  .then()
}

export function agregarElementoAInventario(elemento, valor) {
  acciones.push({
    run: agregarElementoAInventarioPrivado,
    args: { elemento, valor }
  })
}

function agregarElementoAInventarioPrivado(args) {
  const elemento = args.elemento;
  const valor = args.valor;  
  axios
  .post(`${HOST}${RUTAS.MENU_INVENTARIO_ELEMENTO}/${elemento}/${valor}`, {})
  .then()
}

export function obtenerElementoDeInventario(variable, cb) {
  acciones.push({
    run: obtenerElementoDeInventarioPrivado,
    args: { variable, cb }
  })
}

function obtenerElementoDeInventarioPrivado(args) {
  const variable = args.variable;
  const cb = args.cb;
  axios
  .get(`${HOST}${RUTAS.MENU_INVENTARIO_ELEMENTO}/${variable}`, {})
  .then(res => {
    if (cb) cb(res)
  });
} 

export function eliminarElementosDeInventario() {
  acciones.push({
    run: eliminarElementosDeInventarioPrivado
  })
}

function eliminarElementosDeInventarioPrivado() {
  axios
  .delete(`${HOST}${RUTAS.MENU_INVENTARIO_ELEMENTO}`, {})
  .then();
}

export function accion() {
  acciones.push({
    run: accionPrivado
  })
}

function accionPrivado() {
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_ACCION}`, {})
  .then();
}

export function obtenerPosicion(cb) {
  acciones.push({
    run: obtenerPosicionPrivado,
    args: { cb }
  })
}

function obtenerPosicionPrivado(args) {
  const cb = args.cb;
  axios
  .get(`${HOST}${RUTAS.PERSONAJE_POSICION}`, {})
  .then(res => {

    const data = (res.data as string);
    const index = data.indexOf(',');
    const x = +data.slice(0, index);
    const y = +data.slice(index+1);

    if (cb) cb(x, y)
  });
} 

export function cambiarPersonajeMujer() {
  axios.get(`${HOST}${RUTAS.PERSONAJE_MUJER}`, {}).then();
} 

export function cambiarPersonajeHombre() {
  axios.get(`${HOST}${RUTAS.PERSONAJE_HOMBRE}`, {}).then();
} 

export function moverIzquierda() {
  acciones.push({
    run: moverIzquierdaPrivado
  })
}
 
function moverIzquierdaPrivado() { 
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_MOVER_IZQUIERDA}`, {})
  .then();
} 

export function girarIzquierda() {
  acciones.push({
    run: girarIzquierdaPrivado
  })
}

function girarIzquierdaPrivado() {
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_GIRAR_IZQUIERDA}`, {})
  .then();
} 

export function moverDerecha() {
  acciones.push({
    run: moverDerechaPrivado
  })
}

function moverDerechaPrivado() {
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_MOVER_DERECHA}`, {})
  .then();
} 

export function girarDerecha() {
  acciones.push({
    run: girarDerechaPrivado
  })
}

export function girarDerechaPrivado() {
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_GIRAR_DERECHA}`, {})
  .then();
} 

export function moverArriba() {
  acciones.push({
    run: moverArribaPrivado
  })
}

function moverArribaPrivado() {
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_MOVER_ARRIBA}`, {})
  .then();
} 

export function girarArriba() {
  acciones.push({
    run: girarArribaPrivado
  })
}

function girarArribaPrivado() {
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_GIRAR_ARRIBA}`, {})
  .then();
} 

export function moverAbajo() {
  acciones.push({
    run: moverAbajoPrivado
  })
}

function moverAbajoPrivado() {
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_MOVER_ABAJO}`, {})
  .then();
} 

export function girarAbajo() {
  acciones.push({
    run: girarAbajoPrivado
  })
}

function girarAbajoPrivado() {
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_GIRAR_ABAJO}`, {})
  .then();
} 

export function comprobarCultivo(cb) {
  acciones.push({
    run: comprobarCultivoPrivado,
    args: { cb }
  })
}

function comprobarCultivoPrivado(args) {
  const cb = args.cb;
  axios
  .get(`${HOST}${RUTAS.PERSONAJE_COMPROBAR_CULTIVO}`, {})
  .then(res => {
    if (cb) cb(res)
  });
} 

export function sembrar(cultivo: string) {
  acciones.push({
    run: sembrarPrivado,
    args: { cultivo }
  })
}

function sembrarPrivado(args) {
  const cultivo = args.cultivo;
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_SEMBRAR}/${cultivo}`, {})
  .then();
} 

export function recolectar() {
  acciones.push({
    run: recolectarPrivado
  })
}

function recolectarPrivado() {
  axios
  .post(`${HOST}${RUTAS.PERSONAJE_RECOLECTAR}`, {})
  .then();
} 

export function aparecerCultivo(lugar: string, cultivo: string) {
  acciones.push({
    run: aparecerCultivoPrivado,
    args: { lugar, cultivo }
  })
}

function aparecerCultivoPrivado(args) {
  const lugar = args.lugar;
  const cultivo = args.cultivo;
  
  axios
  .post(`${HOST}${RUTAS.HUERTO_APARECER}/${lugar}/${cultivo}`, {})
  .then();
} 

export function desaparecerCultivo(lugar: string) {
  acciones.push({
    run: desaparecerCultivoPrivado,
    args: { lugar }
  })
}

function desaparecerCultivoPrivado(args) {
  const lugar = args.lugar;
  axios
  .post(`${HOST}${RUTAS.HUERTO_DESAPARECER}/${lugar}`, {})
  .then();
}

export function enviarMensaje(msg) {
  acciones.push({
    run: enviarMensajePrivado,
    args: { msg }
  })
}

function enviarMensajePrivado(args) {
  const msg = args.msg;
  axios
  .post(`${HOST}${RUTAS.MENSAJE}`, {
    msg
  })
  .then();
}

export function end() {
  exit = true;
}