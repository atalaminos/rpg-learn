import http

from src.utilidades import acciones


def get(ruta: str):
    connection = http.client.HTTPSConnection(acciones.HOST)
    connection.request("GET", ruta)
    response = connection.getresponse()
    connection.close()
    return response

def post(ruta: str, body: str = None):
    conn = http.client.HTTPSConnection(acciones.HOST)

    headers = {'Content-type': 'application/x-www-form-urlencoded'}
    conn.request('POST', ruta, body, headers)
    response = conn.getresponse()
    return response

def delete(ruta: str):
    connection = http.client.HTTPSConnection(acciones.HOST)
    connection.request("DELETE", ruta)
    response = connection.getresponse()
    connection.close()
    return response