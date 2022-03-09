package niveles;

import java.lang.reflect.Field;
import java.util.HashMap;

import utilidades.Acciones;
import static utilidades.Acciones.*;

public class Nivel1 {
	
	private static Acciones acciones;

	public static void iniciar() {		

		acciones = new Acciones();
		acciones.start();		
		
		reset();
	}

	public static void finalizar(Object object) {
		
		try {
			Field[] fields = object.getClass().getDeclaredFields();
			
			HashMap<String, Integer> parametros = new HashMap<String, Integer>();
			for (Field f : fields) {    
				f.setAccessible(true);
				parametros.put(f.getName(), f.getInt(object));
			}
			
			if (parametros.containsKey("manzanas") 
				&& parametros.containsKey("fresas") 
				&& parametros.containsKey("frutas")
				&& parametros.size() == 3
			    && parametros.get("manzanas") == 10 
				&& parametros.get("fresas") == 5 
				&& parametros.get("frutas") == 15) {
				
			    enviarMensaje("¡Nivel superado!");

			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		end();
	}
}