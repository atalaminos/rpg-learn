package main;

import static niveles.Nivel3.*;
import static utilidades.Acciones.*;

/*
Repite el nivel anterior pero utilizando funciones
*/

public class Nivel3 {
	

	public static void main(String[] args) {
		new Nivel3().comienzo();
	}
	
	public void comienzo() {

		iniciar();
		
		moverAHuerto();
		
		finalizar();
	}
	
	public void moverAHuerto() {
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
	}
}
