from typing import Dict

from src.utilidades.acciones import *


def iniciar():
    reset()


def finalizar(data: Dict):

    if len(data.keys()) == 3 and 'manzanas' in data.keys() and 'fresas' in data.keys() \
            and 'frutas' in data.keys() and data['manzanas'] == 10 and data['fresas'] == 5 \
            and data['frutas'] == 15:
        enviar_mensaje('¡Nivel superado!')

    end()