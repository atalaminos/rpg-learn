import threading
import time

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

class Worker():

    def __init__(self):
        self.exit = False

    def start(self):

        loop = True
        while loop:

            accion = None

            if len(acciones) > 0:
                accion = acciones.pop(0)

            if self.exit and len(acciones) == 0:
                loop = False

            if accion is not None:
                if 'args' in accion:
                    accion['run'](accion['args'])
                else:
                    accion['run']()

            time.sleep(0.250)


worker = Worker()
t = threading.Thread(target=worker.start)
t.start()

def reset():
    acciones.append({
        'run': _reset
    })

def _reset():
    http_client.post(RUTAS.RESET)

def abrir_inventario():
    acciones.append({
        'run': _abrir_inventario
    })

def _abrir_inventario():
    http_client.get(RUTAS.MENU_INVENTARIO)

def cerrar_inventario():
    acciones.append({
        'run': _abrir_inventario
    })

def _cerrar_inventario():
    http_client.delete(RUTAS.MENU_INVENTARIO)

def agregar_elemento_a_inventario(elemento, valor):
    acciones.append({
        'run': _agregar_elemento_a_inventario,
        'args': {
            'elemento': elemento,
            'valor': valor
        }
    })

def _agregar_elemento_a_inventario(args):
    elemento = args['elemento']
    valor = args['valor']
    http_client.post(f'{RUTAS.MENU_INVENTARIO_ELEMENTO}/{elemento}/{valor}')

def obtener_elemento_de_inventario(elemento, callback):
    acciones.append({
        'run': _obtener_elemento_de_inventario,
        'args': {
            'elemento': elemento,
            'callback': callback
        }
    })

def _obtener_elemento_de_inventario(args):
    elemento = args['elemento']
    callback = args['callback']
    http_client.get(f'{RUTAS.MENU_INVENTARIO_ELEMENTO}/{elemento}')
    callback()

def eliminar_elementos_de_inventario():
    acciones.append({
        'run': _eliminar_elementos_de_inventario
    })

def _eliminar_elementos_de_inventario():
    http_client.delete(RUTAS.MENU_INVENTARIO_ELEMENTO)

def accion():
    acciones.append({
        'run': _accion
    })

def _accion():
    http_client.post(RUTAS.PERSONAJE_ACCION)

def obtener_posicion(callback):
    acciones.append({
        'run': _obtener_posicion,
        'args': {
            'callback': callback
        }
    })

def _obtener_posicion(args):
    callback = args['callback']
    data = http_client.get(RUTAS.PERSONAJE_POSICION)
    elementos = data.split(',')
    callback(int(elementos[0]), int(elementos[1]))

def cambiar_personaje_mujer():
    acciones.append({
        'run': _cambiar_personaje_mujer
    })

def _cambiar_personaje_mujer():
    data = http_client.post(RUTAS.PERSONAJE_MUJER)

def cambiar_personaje_hombre():
    acciones.append({
        'run': _cambiar_personaje_hombre
    })

def _cambiar_personaje_hombre():
    http_client.post(RUTAS.PERSONAJE_HOMBRE)

def mover_izquierda():
    acciones.append({
        'run': _mover_izquierda
    })

def _mover_izquierda():
    http_client.post(RUTAS.PERSONAJE_MOVER_IZQUIERDA)

def girar_izquierda():
    acciones.append({
        'run': _girar_izquierda
    })

def _girar_izquierda():
    http_client.post(RUTAS.PERSONAJE_GIRAR_IZQUIERDA)

def mover_derecha():
    acciones.append({
        'run': _mover_derecha
    })

def _mover_derecha():
    http_client.post(RUTAS.PERSONAJE_MOVER_DERECHA)

def mover_arriba():
    acciones.append({
        'run': _mover_arriba
    })

def _mover_arriba():
    http_client.post(RUTAS.PERSONAJE_MOVER_ARRIBA)

def girar_arriba():
    acciones.append({
        'run': _girar_arriba
    })

def _girar_arriba():
    http_client.post(RUTAS.PERSONAJE_GIRAR_ARRIBA)

def mover_abajo():
    acciones.append({
        'run': _mover_abajo
    })

def _mover_abajo():
    http_client.post(RUTAS.PERSONAJE_MOVER_ABAJO)

def girar_abajo():
    acciones.append({
        'run': _girar_abajo
    })

def _girar_abajo():
    http_client.post(RUTAS.PERSONAJE_GIRAR_ABAJO)

def girar_derecha():
    acciones.append({
        'run': _girar_derecha
    })

def _girar_derecha():
    http_client.post(RUTAS.PERSONAJE_GIRAR_DERECHA)

def comprobar_cultivo(callback):
    acciones.append({
        'run': _comprobar_cultivo,
        'msg': {
            'callback': callback
        }
    })

def _comprobar_cultivo(args):
    callback = args['callback']
    data = http_client.get(RUTAS.PERSONAJE_COMPROBAR_CULTIVO)
    callback()

def sembrar(cultivo):
    acciones.append({
        'run': _sembrar,
        'msg': {
            'cultivo': cultivo
        }
    })

def _sembrar(args):
    cultivo = args['cultivo']
    http_client.post(f'{RUTAS.PERSONAJE_COMPROBAR_CULTIVO}/{cultivo}')

def recolectar():
    acciones.append({
        'run': _recolectar
    })

def _recolectar():
    http_client.post(f'{RUTAS.PERSONAJE_RECOLECTAR}')

def aparecerar_cultivo(lugar: str, cultivo: str):
    acciones.append({
        'run': _aparecerar_cultivo,
        'args': {
            'lugar': lugar,
            'cultivo': cultivo
        }
    })

def _aparecerar_cultivo(args):
    lugar = args['lugar']
    cultivo = args['cultivo']
    http_client.post(f'{RUTAS.HUERTO_APARECER}/{lugar}/{cultivo}/')

def desaparecerar_cultivo(lugar: str):
    acciones.append({
        'run': _desaparecerar_cultivo,
        'msg': {
            'lugar': lugar
        }
    })


def _desaparecerar_cultivo(args):
    lugar = args['lugar']
    http_client.post(f'{RUTAS.HUERTO_DESAPARECER}/{lugar}')

def enviar_mensaje(msg: str):
    acciones.append({
        'run': _enviar_mensaje,
        'args': {
            "msg": "msg="+msg
        }
    })


def _enviar_mensaje(args):
    msg = args['msg']
    http_client.post(RUTAS.MENSAJE, msg)


def end():
    worker.exit = True