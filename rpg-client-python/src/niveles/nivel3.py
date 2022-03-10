from src.utilidades.acciones import *

def iniciar():
    reset()

def finalizar():

    def callback(x, y):
        if 65 <= x <= 210 and 128 <= y <= 278:
            enviar_mensaje('¡Nivel superado!')
        end()

    obtener_posicion(callback)

