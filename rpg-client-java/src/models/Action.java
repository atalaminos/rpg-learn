package models;

import java.util.HashMap;
import java.util.StringTokenizer;

import interfaces.ObtenerPosicionInterface;
import utilidades.Acciones;
import utils.HTTP;

public class Action {

	private ActionType actionType;
	private HashMap<String, Object> argumentos;

	public Action(ActionType actionType, HashMap<String, Object> argumentos) {
		this.actionType = actionType;
		this.argumentos = argumentos;
	}

	public void run() {

		switch (this.actionType) {

		case RESET_PRIVADO: {
			HTTP.post(Acciones.RUTAS_RESET, null);
			break;
		}

		case ABRIR_INVENTARIO: {
			HTTP.get(Acciones.RUTAS_MENU_INVENTARIO);
			break;
		}
		
		case CERRAR_INVENTARIO: {
			HTTP.delete(Acciones.RUTAS_MENU_INVENTARIO);
			break;
		}
		
		case AGREGAR_ELEMENTO_A_INVENTARIO: {
			String elemento = (String) argumentos.get("elemento");
			String valor = (String) argumentos.get("valor");
			
			HTTP.post(Acciones.RUTAS_MENU_INVENTARIO + "/" + elemento + "/" + valor, null);
			break;
		}
		
		case OBTENER_ELEMENTO_DE_INVENTARIO: {
			HTTP.get(Acciones.RUTAS_MENU_INVENTARIO);			
			break;
		}
		
		case ELIMINAR_ELEMENTOS_DE_INVENTARIO: {
			HTTP.delete(Acciones.RUTAS_MENU_INVENTARIO);
			break;
		}
		
		case ACCION: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_ACCION, null);
			break;
		}
		
		case OBTENER_POSICION: {
			
			ObtenerPosicionInterface callback = (ObtenerPosicionInterface) argumentos.get("callback");
			String data = HTTP.get(Acciones.RUTAS_PERSONAJE_POSICION);
			
			StringTokenizer st = new StringTokenizer(data,",");  		
			int x = Integer.parseInt((String) st.nextElement());
			int y = Integer.parseInt((String) st.nextElement());
			callback.apply(x, y);
			
			break;
		}
		
		case CAMBIAR_PERSONAJE_MUJER: {
			HTTP.get(Acciones.RUTAS_PERSONAJE_MUJER);
			break;
		}
		
		case CAMBIAR_PERSONAJE_HOMBRE: {
			HTTP.get(Acciones.RUTAS_PERSONAJE_HOMBRE);
			break;
		}
		
		case MOVER_IZQUIERDA: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_MOVER_IZQUIERDA, null);
			break;
		}
		
		case GIRAR_IZQUIERDA: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_GIRAR_IZQUIERDA, null);
			break;
		}
		
		case MOVER_DERECHA: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_MOVER_DERECHA, null);
			break;
		}
		
		case GIRAR_DERECHA: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_GIRAR_DERECHA, null);
			break;
		}
		
		case MOVER_ARRIBA: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_MOVER_ARRIBA, null);
			break;
		}
		
		case GIRAR_ARRIBA: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_GIRAR_DERECHA, null);
			break;
		}
		
		case MOVER_ABAJO: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_MOVER_ABAJO, null);
			break;
		}
		
		case GIRAR_ABAJO: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_GIRAR_ABAJO, null);
			break;
		}
		
		case COMPROBAR_CULTIVO: {
			HTTP.get(Acciones.RUTAS_PERSONAJE_COMPROBAR_CULTIVO);
			break;
		}
		
		case SEMBRAR: {
			String cultivo = (String) argumentos.get("cultivo");
			
			HTTP.post(Acciones.RUTAS_PERSONAJE_SEMBRAR + "/" + cultivo, null);
			break;
		}
		
		case RECOLECTAR: {
			HTTP.post(Acciones.RUTAS_PERSONAJE_RECOLECTAR, null);
			break;
		}
		
		case APARECER_CULTIVO: {
			String lugar = (String) argumentos.get("lugar");
			String cultivo = (String) argumentos.get("cultivo");
			
			HTTP.post(Acciones.RUTAS_HUERTO_APARECER + "/" + lugar + "/" + cultivo, null);
			break;
		}
		
		case DESAPARECER_CULTIVO: {
			String lugar = (String) argumentos.get("lugar");
			
			HTTP.post(Acciones.RUTAS_HUERTO_DESAPARECER + "/" + lugar, null);
			break;
		}
		
		case ENVIAR_MENSAJE: {
			String msg = (String) argumentos.get("msg");
			
			HTTP.post(Acciones.RUTAS_MENSAJE, "msg=" + msg);
			break;
		}		
		
		default:
			break;
		}
	}

}
