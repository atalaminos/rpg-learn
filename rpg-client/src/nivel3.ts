import { iniciar, finalizar } from './niveles/nivel3'
import { moverArriba, moverIzquierda, girarArriba, girarIzquierda, obtenerPosicion } from './utilidades/acciones';
iniciar();

/*
  Repite el nivel anterior pero utilizando funciones

/** */

function moverAHuerto() {

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

moverAHuerto();

/** */
finalizar(this);


