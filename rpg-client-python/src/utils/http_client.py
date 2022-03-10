import requests

from src.utilidades import acciones


def get(ruta: str):
    r = requests.get(acciones.HOST + ruta)
    return r.text

def post(ruta: str, body: str = None):

    body= body if body is None else body.encode("utf-8")
    r = requests.post(acciones.HOST + ruta,
                      data=body,
                      headers={'Content-Type': 'application/x-www-form-urlencoded'})

    return r.text

def delete(ruta: str):
    r = requests.delete(acciones.HOST + ruta)
    return r.text