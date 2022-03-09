"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.end = exports.enviarMensaje = exports.desaparecerCultivo = exports.aparecerCultivo = exports.recolectar = exports.sembrar = exports.comprobarCultivo = exports.girarAbajo = exports.moverAbajo = exports.girarArriba = exports.moverArriba = exports.girarDerechaPrivado = exports.girarDerecha = exports.moverDerecha = exports.girarIzquierda = exports.moverIzquierda = exports.cambiarPersonajeHombre = exports.cambiarPersonajeMujer = exports.obtenerPosicion = exports.accion = exports.eliminarElementosDeInventario = exports.obtenerElementoDeInventario = exports.agregarElementoAInventario = exports.cerrarInventario = exports.abrirInventario = exports.reset = void 0;
const axios = require('axios');
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
};
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
function reset() {
    acciones.push({
        run: resetPrivado
    });
}
exports.reset = reset;
function resetPrivado() {
    axios
        .post(`${HOST}${RUTAS.RESET}`, {})
        .then();
}
function abrirInventario() {
    acciones.push({
        run: abrirInventarioPrivado
    });
}
exports.abrirInventario = abrirInventario;
function abrirInventarioPrivado() {
    axios
        .get(`${HOST}${RUTAS.MENU_INVENTARIO}`, {})
        .then();
}
function cerrarInventario() {
    acciones.push({
        run: cerrarInventarioPrivado
    });
}
exports.cerrarInventario = cerrarInventario;
function cerrarInventarioPrivado() {
    axios
        .delete(`${HOST}${RUTAS.MENU_INVENTARIO}`, {})
        .then();
}
function agregarElementoAInventario(elemento, valor) {
    acciones.push({
        run: agregarElementoAInventarioPrivado,
        args: { elemento, valor }
    });
}
exports.agregarElementoAInventario = agregarElementoAInventario;
function agregarElementoAInventarioPrivado(args) {
    const elemento = args.elemento;
    const valor = args.valor;
    axios
        .post(`${HOST}${RUTAS.MENU_INVENTARIO_ELEMENTO}/${elemento}/${valor}`, {})
        .then();
}
function obtenerElementoDeInventario(variable, cb) {
    acciones.push({
        run: obtenerElementoDeInventarioPrivado,
        args: { variable, cb }
    });
}
exports.obtenerElementoDeInventario = obtenerElementoDeInventario;
function obtenerElementoDeInventarioPrivado(args) {
    const variable = args.variable;
    const cb = args.cb;
    axios
        .get(`${HOST}${RUTAS.MENU_INVENTARIO_ELEMENTO}/${variable}`, {})
        .then(res => {
        if (cb)
            cb(res);
    });
}
function eliminarElementosDeInventario() {
    acciones.push({
        run: eliminarElementosDeInventarioPrivado
    });
}
exports.eliminarElementosDeInventario = eliminarElementosDeInventario;
function eliminarElementosDeInventarioPrivado() {
    axios
        .delete(`${HOST}${RUTAS.MENU_INVENTARIO_ELEMENTO}`, {})
        .then();
}
function accion() {
    acciones.push({
        run: accionPrivado
    });
}
exports.accion = accion;
function accionPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_ACCION}`, {})
        .then();
}
function obtenerPosicion(cb) {
    acciones.push({
        run: obtenerPosicionPrivado,
        args: { cb }
    });
}
exports.obtenerPosicion = obtenerPosicion;
function obtenerPosicionPrivado(args) {
    const cb = args.cb;
    axios
        .get(`${HOST}${RUTAS.PERSONAJE_POSICION}`, {})
        .then(res => {
        const data = res.data;
        const index = data.indexOf(',');
        const x = +data.slice(0, index);
        const y = +data.slice(index + 1);
        if (cb)
            cb(x, y);
    });
}
function cambiarPersonajeMujer() {
    axios.get(`${HOST}${RUTAS.PERSONAJE_MUJER}`, {}).then();
}
exports.cambiarPersonajeMujer = cambiarPersonajeMujer;
function cambiarPersonajeHombre() {
    axios.get(`${HOST}${RUTAS.PERSONAJE_HOMBRE}`, {}).then();
}
exports.cambiarPersonajeHombre = cambiarPersonajeHombre;
function moverIzquierda() {
    acciones.push({
        run: moverIzquierdaPrivado
    });
}
exports.moverIzquierda = moverIzquierda;
function moverIzquierdaPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_MOVER_IZQUIERDA}`, {})
        .then();
}
function girarIzquierda() {
    acciones.push({
        run: girarIzquierdaPrivado
    });
}
exports.girarIzquierda = girarIzquierda;
function girarIzquierdaPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_GIRAR_IZQUIERDA}`, {})
        .then();
}
function moverDerecha() {
    acciones.push({
        run: moverDerechaPrivado
    });
}
exports.moverDerecha = moverDerecha;
function moverDerechaPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_MOVER_DERECHA}`, {})
        .then();
}
function girarDerecha() {
    acciones.push({
        run: girarDerechaPrivado
    });
}
exports.girarDerecha = girarDerecha;
function girarDerechaPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_GIRAR_DERECHA}`, {})
        .then();
}
exports.girarDerechaPrivado = girarDerechaPrivado;
function moverArriba() {
    acciones.push({
        run: moverArribaPrivado
    });
}
exports.moverArriba = moverArriba;
function moverArribaPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_MOVER_ARRIBA}`, {})
        .then();
}
function girarArriba() {
    acciones.push({
        run: girarArribaPrivado
    });
}
exports.girarArriba = girarArriba;
function girarArribaPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_GIRAR_ARRIBA}`, {})
        .then();
}
function moverAbajo() {
    acciones.push({
        run: moverAbajoPrivado
    });
}
exports.moverAbajo = moverAbajo;
function moverAbajoPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_MOVER_ABAJO}`, {})
        .then();
}
function girarAbajo() {
    acciones.push({
        run: girarAbajoPrivado
    });
}
exports.girarAbajo = girarAbajo;
function girarAbajoPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_GIRAR_ABAJO}`, {})
        .then();
}
function comprobarCultivo(cb) {
    acciones.push({
        run: comprobarCultivoPrivado,
        args: { cb }
    });
}
exports.comprobarCultivo = comprobarCultivo;
function comprobarCultivoPrivado(args) {
    const cb = args.cb;
    axios
        .get(`${HOST}${RUTAS.PERSONAJE_COMPROBAR_CULTIVO}`, {})
        .then(res => {
        if (cb)
            cb(res);
    });
}
function sembrar(cultivo) {
    acciones.push({
        run: sembrarPrivado,
        args: { cultivo }
    });
}
exports.sembrar = sembrar;
function sembrarPrivado(args) {
    const cultivo = args.cultivo;
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_SEMBRAR}/${cultivo}`, {})
        .then();
}
function recolectar() {
    acciones.push({
        run: recolectarPrivado
    });
}
exports.recolectar = recolectar;
function recolectarPrivado() {
    axios
        .post(`${HOST}${RUTAS.PERSONAJE_RECOLECTAR}`, {})
        .then();
}
function aparecerCultivo(lugar, cultivo) {
    acciones.push({
        run: aparecerCultivoPrivado,
        args: { lugar, cultivo }
    });
}
exports.aparecerCultivo = aparecerCultivo;
function aparecerCultivoPrivado(args) {
    const lugar = args.lugar;
    const cultivo = args.cultivo;
    axios
        .post(`${HOST}${RUTAS.HUERTO_APARECER}/${lugar}/${cultivo}`, {})
        .then();
}
function desaparecerCultivo(lugar) {
    acciones.push({
        run: desaparecerCultivoPrivado,
        args: { lugar }
    });
}
exports.desaparecerCultivo = desaparecerCultivo;
function desaparecerCultivoPrivado(args) {
    const lugar = args.lugar;
    axios
        .post(`${HOST}${RUTAS.HUERTO_DESAPARECER}/${lugar}`, {})
        .then();
}
function enviarMensaje(msg) {
    acciones.push({
        run: enviarMensajePrivado,
        args: { msg }
    });
}
exports.enviarMensaje = enviarMensaje;
function enviarMensajePrivado(args) {
    const msg = args.msg;
    axios
        .post(`${HOST}${RUTAS.MENSAJE}`, {
        msg
    })
        .then();
}
function end() {
    exit = true;
}
exports.end = end;
