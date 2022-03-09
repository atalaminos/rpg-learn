import threading

from src.utils import http_client

HOST = 'http://localhost:3000'

class RUTAS:
    RESET = "/reset"
    MENU_INVENTARIO = "/menu/inventario"
    MENU_INVENTARIO_ELEMENTO = "/menu/inventario/elemento"
    PERSONAJE_POSICION = "/personaje/posicion" 
    PERSONAJE_HOMBRE = "/personaje/hombre" 
    PERSONAJE_MUJER = "/personaje/mujer" 
    PERSONAJE_ACCION = "/personaje/accion" 
    PERSONAJE_MOVER_IZQUIERDA = "/personaje/mover/izquierda"
    PERSONAJE_GIRAR_IZQUIERDA = "/personaje/girar/izquierda"
    PERSONAJE_MOVER_DERECHA = "/personaje/mover/derecha"
    PERSONAJE_GIRAR_DERECHA = "/personaje/girar/derecha"
    PERSONAJE_MOVER_ARRIBA = "/personaje/mover/arriba"
    PERSONAJE_GIRAR_ARRIBA = "/personaje/girar/arriba"
    PERSONAJE_MOVER_ABAJO = "/personaje/mover/abajo"
    PERSONAJE_GIRAR_ABAJO = "/personaje/girar/abajo"
    PERSONAJE_COMPROBAR_CULTIVO = "/personaje/comprobar/cultivo"
    PERSONAJE_SEMBRAR = "/personaje/sembrar"
    PERSONAJE_RECOLECTAR = "/personaje/recolectar"
    HUERTO_APARECER = "/huerto/aparecer"
    HUERTO_DESAPARECER = "/huerto/desaparecer"
    MENSAJE = "/mensaje"


acciones = []
exit = False

def worker():
    accion = acciones.pop(0)
    exit = False

    while not exit:

        if exit and len(acciones) == 0:
            exit = True

        if accion is not None:
            accion['run'](accion['args'])

t = threading.Thread(target=worker)
t.start()


def reset():
    acciones.append({
        'run': _reset
    })


def _reset():
    http_client.post(RUTAS.RESET)

def enviar_mensaje(msg: str):
    acciones.append({
        'run': _enviar_mensaje,
        'args': msg
    })


def _enviar_mensaje(args):
    msg = args['msg']
    http_client.post(RUTAS.MENSAJE, msg)


def end():
    exit = True