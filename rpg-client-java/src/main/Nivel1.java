package main;

import static niveles.Nivel1.*;

/*
Crea tres variables de instancia: 
  - manzanas con un valor 10
  - fresas con valor a 5
  - frutas como suma de las dos variables anteriores
*/

public class Nivel1 {
	
	private int manzanas;
	private int fresas;
	private int frutas;
	

	public static void main(String[] args) {
		new Nivel1().comienzo();
	}
	
	public void comienzo() {

		iniciar();
		
		manzanas = 10;
		fresas = 5;
		frutas = fresas + manzanas;
		
		finalizar(this);
	}

}
