package niveles;

import utilidades.Acciones;
import static utilidades.Acciones.*;

public class Nivel3 {

	private static Acciones acciones;

	public static void iniciar() {

		acciones = new Acciones();
		acciones.start();

		reset();
	}

	public static void finalizar() {

		obtenerPosicion((x, y) -> {

			if ((x >= 65) && (x <= 210) && (y >= 128) && (y <= 278)) {
				enviarMensaje("¡Nivel superado!");
			}

			end();
		});
	}
}