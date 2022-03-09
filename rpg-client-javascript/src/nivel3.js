const {
  iniciar,
  finalizar
} = require('./niveles/nivel3');

const {
  moverArriba,
  moverIzquierda,
  girarArriba,
  girarIzquierda
} = require('./utilidades/acciones');

iniciar();

/*
  Repite el nivel anterior pero utilizando funciones
*/

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

/* */
finalizar(this);


