package utilidades;

import java.util.ArrayList;
import java.util.HashMap;

import interfaces.ObtenerPosicionInterface;
import models.Action;
import models.ActionType;
import utils.Time;

public class Acciones extends Thread {
	
	public final static String HOST = "http://localhost:3000";

	public final static String RUTAS_RESET = "/reset";
	public final static String RUTAS_MENU_INVENTARIO = "/menu/inventario";
	public final static String RUTAS_MENU_INVENTARIO_ELEMENTO = "/menu/inventario/elemento";
	public final static String RUTAS_PERSONAJE_POSICION = "/personaje/posicion"; 
	public final static String RUTAS_PERSONAJE_HOMBRE = "/personaje/hombre"; 
	public final static String RUTAS_PERSONAJE_MUJER = "/personaje/mujer"; 
	public final static String RUTAS_PERSONAJE_ACCION = "/personaje/accion"; 
	public final static String RUTAS_PERSONAJE_MOVER_IZQUIERDA = "/personaje/mover/izquierda";
	public final static String RUTAS_PERSONAJE_GIRAR_IZQUIERDA = "/personaje/girar/izquierda";
	public final static String RUTAS_PERSONAJE_MOVER_DERECHA = "/personaje/mover/derecha";
	public final static String RUTAS_PERSONAJE_GIRAR_DERECHA = "/personaje/girar/derecha";
	public final static String RUTAS_PERSONAJE_MOVER_ARRIBA = "/personaje/mover/arriba";
	public final static String RUTAS_PERSONAJE_GIRAR_ARRIBA = "/personaje/girar/arriba";
	public final static String RUTAS_PERSONAJE_MOVER_ABAJO = "/personaje/mover/abajo";
	public final static String RUTAS_PERSONAJE_GIRAR_ABAJO = "/personaje/girar/abajo";
	public final static String RUTAS_PERSONAJE_COMPROBAR_CULTIVO = "/personaje/comprobar/cultivo";
	public final static String RUTAS_PERSONAJE_SEMBRAR = "/personaje/sembrar";
	public final static String RUTAS_PERSONAJE_RECOLECTAR = "/personaje/recolectar";
	public final static String RUTAS_HUERTO_APARECER = "/huerto/aparecer";
	public final static String RUTAS_HUERTO_DESAPARECER = "/huerto/desaparecer";
	public final static String RUTAS_MENSAJE = "/mensaje";
	
	private static ArrayList<Action> acciones = new ArrayList<Action>();
	private static boolean exit = false;
	
	public void run() {

		
		boolean loop = true;
		
		while(loop) {
			
			
			Action accion = null;
			if (acciones.size() != 0) {
				accion = acciones.get(0);
				acciones.remove(0);
			}
			
			if ((exit) && (acciones.size() == 0)) {
				loop = false;
			}
			
			if (accion != null) {
				accion.run();
			}
			
			Time.sleep(250);
		}	
	 }
	

	public static void reset() {
		acciones.add(new Action(ActionType.RESET_PRIVADO, new HashMap<>()));
	}
	
	public static void abrirInventario() {
		acciones.add(new Action(ActionType.ABRIR_INVENTARIO, new HashMap<>()));
	}
	
	public static void cerrarInventario() {
		acciones.add(new Action(ActionType.CERRAR_INVENTARIO, new HashMap<>()));
	}
	
	public static void agregarElementoAInventario(String elemento, String valor) {
		HashMap<String, Object> argumentos = new HashMap<>();
		argumentos.put("elemento", elemento);
		argumentos.put("valor", valor);
		
		acciones.add(new Action(ActionType.AGREGAR_ELEMENTO_A_INVENTARIO, argumentos));
	}
	
	public static void obtenerElementoAInventario(String elemento, String valor) {
		HashMap<String, Object> argumentos = new HashMap<>();
		argumentos.put("elemento", elemento);
		
		acciones.add(new Action(ActionType.OBTENER_ELEMENTO_DE_INVENTARIO, argumentos));
	}
	
	public static void eliminarElementosDeInventario() {		
		acciones.add(new Action(ActionType.ELIMINAR_ELEMENTOS_DE_INVENTARIO, new HashMap<>()));
	}
	
	public static void accion() {		
		acciones.add(new Action(ActionType.ACCION, new HashMap<>()));
	}
	
	public static void obtenerPosicion(ObtenerPosicionInterface callback) {		
		HashMap<String, Object> argumentos = new HashMap<>();
		argumentos.put("callback", callback);
		
		acciones.add(new Action(ActionType.OBTENER_POSICION, argumentos));
	}

	public static void cambiarPersonajeMujer() {		
		acciones.add(new Action(ActionType.CAMBIAR_PERSONAJE_MUJER, new HashMap<>()));
	}
	
	public static void cambiarPersonajeHombre() {		
		acciones.add(new Action(ActionType.CAMBIAR_PERSONAJE_HOMBRE, new HashMap<>()));
	}
	
	public static void moverIzquierda() {		
		acciones.add(new Action(ActionType.MOVER_IZQUIERDA, new HashMap<>()));
	}
	
	public static void girarIzquierda() {		
		acciones.add(new Action(ActionType.GIRAR_IZQUIERDA, new HashMap<>()));
	}
	
	public static void moverDerecha() {		
		acciones.add(new Action(ActionType.MOVER_DERECHA, new HashMap<>()));
	}
	
	public static void girarDerecha() {		
		acciones.add(new Action(ActionType.GIRAR_DERECHA, new HashMap<>()));
	}
	
	public static void moverArriba() {		
		acciones.add(new Action(ActionType.MOVER_ARRIBA, new HashMap<>()));
	}
	
	public static void girarArriba() {		
		acciones.add(new Action(ActionType.GIRAR_ARRIBA, new HashMap<>()));
	}
	
	public static void moverAbajo() {		
		acciones.add(new Action(ActionType.MOVER_ABAJO, new HashMap<>()));
	}
	
	public static void girarAbajo() {		
		acciones.add(new Action(ActionType.GIRAR_ABAJO, new HashMap<>()));
	}
	
	public static void comprobarCultivo() {		
		acciones.add(new Action(ActionType.COMPROBAR_CULTIVO, new HashMap<>()));
	}
	
	public static void sembrarPrivado() {		
		acciones.add(new Action(ActionType.SEMBRAR, new HashMap<>()));
	}
	
	public static void recolectar() {		
		acciones.add(new Action(ActionType.RECOLECTAR, new HashMap<>()));
	}
	
	public static void aparecerCultivo(String lugar, String cultivo) {
		HashMap<String, Object> argumentos = new HashMap<>();
		argumentos.put("lugar", lugar);
		argumentos.put("cultivo", cultivo);
		
		acciones.add(new Action(ActionType.APARECER_CULTIVO, argumentos));
	}
	
	public static void desaparecerCultivo() {		
		acciones.add(new Action(ActionType.DESAPARECER_CULTIVO, new HashMap<>()));
	}
	
	public static void enviarMensaje(String msg) {		
		HashMap<String, Object> argumentos = new HashMap<>();
		argumentos.put("msg", msg);
		
		acciones.add(new Action(ActionType.ENVIAR_MENSAJE, argumentos));
	}

	public static void end() {
		exit = true;		
	}
}
