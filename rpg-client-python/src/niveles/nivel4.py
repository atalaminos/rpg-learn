from src.utilidades.constants import CONSTANTS
from src.utilidades.acciones import *

def iniciar():
    reset()
    aparecerar_cultivo(
        CONSTANTS.HUERTO_LUGAR_H1,
        CONSTANTS.HUERTO_CULTIVO_LECHUGA)

def finalizar():
    end()

