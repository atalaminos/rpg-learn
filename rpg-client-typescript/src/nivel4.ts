import { iniciar, finalizar } from './niveles/nivel4'
import { moverArriba, moverIzquierda, girarArriba, recolectar, girarIzquierda } from './utilidades/acciones';
iniciar();

/*
  Recolecta la lechuga del huerto. Utiliza los siguientes verbos:
  - moverArriba
  - girarArriba
  - moverIzquierda
  - girarIzquierda
  - recolectar

/** */

function moverALechuga() {

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

moverALechuga();
recolectar();

/** */
finalizar(this);


