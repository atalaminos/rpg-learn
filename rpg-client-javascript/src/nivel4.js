const {
  iniciar,
  finalizar
} = require('./niveles/nivel4');

const {
  moverArriba,
  moverIzquierda,
  girarArriba,
  recolectar,
  girarIzquierda
} = require('./utilidades/acciones');

iniciar();

/*
  Recolecta la lechuga del huerto. Utiliza los siguientes verbos:
  - moverArriba
  - girarArriba
  - moverIzquierda
  - girarIzquierda
  - recolectar
/* */

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

/* */
finalizar(this);


