const {
  iniciar,
  finalizar
} = require('./niveles/nivel2');

const {
  moverArriba,
  moverIzquierda,
  girarArriba,
  girarIzquierda
} = require('./utilidades/acciones');

iniciar();

/*
  Mueve el personaje hacia el huerto. Utiliza los siguientes verbos:
    - moverArriba
    - girarArriba
    - moverIzquierda
    - girarIzquierda
*/

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

/* */
finalizar(this);


