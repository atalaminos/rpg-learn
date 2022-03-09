package main;

import static niveles.Nivel2.*;
import static utilidades.Acciones.*;

/*
  Mueve el personaje hacia el huerto. Utiliza los siguientes verbos:
    - moverArriba
    - girarArriba
    - moverIzquierda
    - girarIzquierda
*/

public class Nivel2 {
	

	public static void main(String[] args) {
		new Nivel2().comienzo();
	}
	
	public void comienzo() {

		iniciar();
		
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
		
		finalizar();
	}

}
