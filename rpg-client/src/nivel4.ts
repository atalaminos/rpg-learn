import { iniciar, finalizar } from './niveles/nivel4'
import { moverArriba, moverIzquierda, girarArriba, recolectar } from './utilidades/acciones';
iniciar();

/*
  Recolecta la lechuga del huerto. Utiliza los siguientes verbos:
  - moverArriba
  - moverIzquierda
  - girarArriba
  - recolectar

/** */

function moverALechuga() {

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
  moverIzquierda(); 
  moverIzquierda(); 
  moverIzquierda(); 

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
  moverArriba();
  moverArriba();
  moverArriba();

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
}

moverALechuga();
recolectar();

/** */
finalizar(this);


