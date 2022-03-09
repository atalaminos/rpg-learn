package main;

import static niveles.Nivel4.*;
import static utilidades.Acciones.*;

/*
Repite el nivel anterior pero utilizando funciones
*/

public class Nivel4 {

	public static void main(String[] args) {
		new Nivel4().comienzo();
	}

	public void comienzo() {

		iniciar();

		moverALechuga();
		recolectar();

		finalizar();
	}

	public void moverALechuga() {

		girarIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();

		girarArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();
		moverArriba();

		girarIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();
		moverIzquierda();

		girarArriba();

		moverArriba();
		moverArriba();
		moverArriba();
	}

}
