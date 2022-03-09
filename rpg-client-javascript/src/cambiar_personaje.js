"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nivel2_1 = require("./niveles/nivel2");
const acciones_1 = require("./utilidades/acciones");
(0, nivel2_1.iniciar)();
let cambio = true;
setInterval(() => {
    (cambio = !cambio) ?
        (0, acciones_1.cambiarPersonajeMujer)() :
        (0, acciones_1.cambiarPersonajeHombre)();
}, 1000);
