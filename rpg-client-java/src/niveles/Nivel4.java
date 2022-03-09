package niveles;

import utilidades.Acciones;
import utilidades.Constants;

import static utilidades.Acciones.*;

public class Nivel4 {

	private static Acciones acciones;

	public static void iniciar() {

		acciones = new Acciones();
		acciones.start();

		reset();
		aparecerCultivo(Constants.HUERTO_LUGAR_H1, Constants.HUERTO_CULTIVO_LECHUGA);
	}

	public static void finalizar() {
		end();
	}
}