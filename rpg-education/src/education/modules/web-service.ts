import { RpgWorld, Direction, Move } from '@rpgjs/server'
const { Key, By } = require('selenium-webdriver');

import { Database } from './database';
import { operations } from './operations';

const database = new Database();

export function middleware(app, education) {

  // abrir inventario
  app.get('/menu/inventario', async (req, res) => {
    operations.openInventory(education);
    res.send();
  });

  app.delete('/menu/inventario', (req, res) => {
    operations.closeInventory(education);
    res.send();
  });

  app.get('/menu/inventario/elemento/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const cantidad = operations.getItem(database, nombre);
    res.send(cantidad);
  });

  app.post('/menu/inventario/elemento/:nombre/:cantidad', (req, res) => {
    const nombre = req.params.nombre;
    const cantidad = req.params.cantidad;
    operations.setItem(database, nombre, cantidad);
    res.send();
  });

  app.delete('/menu/inventario/elemento', (_, res) => {
    operations.deleteItems(database);
    res.send();
  });

  app.get('/personaje/hombre', (req, res) => {
    RpgWorld.getPlayers().forEach(player => {
      player.setGraphic('male1_2');
    });
    res.send(``);
  });

  app.get('/personaje/mujer', (req, res) => {
    RpgWorld.getPlayers().forEach(player => {
      player.setGraphic('woman1_2');
    });
    res.send(``);
  })

  app.get('/personaje/posicion', (req, res) => {
    let x,y;
    RpgWorld.getPlayers().forEach(player => {
      x = player.position.x;
      y = player.position.y;
    });
    res.send(`${x},${y}`);
  });

  app.post('/personaje/accion', (req, res) => {
    const actions = education.driver.actions();
    actions.keyDown(Key.SPACE).pause(50).keyUp(Key.SPACE).perform();
    res.send();
  });

  app.post('/personaje/mover/izquierda', (req, res) => {
    // const actions = education.driver.actions();
    // actions.keyDown(Key.ARROW_LEFT).pause(50).keyUp(Key.ARROW_LEFT).perform();
    const players = RpgWorld.getPlayers()

    players.forEach(player => player.moveRoutes([ Move.left(4) as any ]) )
    //  Move.left(4) = 4 times the speed of the character (if the speed is 3 then it will move 12px)
    res.send();
  });

  app.post('/personaje/mover/derecha', (req, res) => {
    const actions = education.driver.actions();
    actions.keyDown(Key.ARROW_RIGHT).pause(50).keyUp(Key.ARROW_RIGHT).perform();
    res.send();
  });

  app.post('/personaje/mover/abajo', (req, res) => {
    const actions = education.driver.actions();
    actions.keyDown(Key.ARROW_DOWN).pause(50).keyUp(Key.ARROW_DOWN).perform();
    res.send();
  });

  app.post('/personaje/mover/arriba', (req, res) => {
    const players = RpgWorld.getPlayers()

    players.forEach(player => player.moveRoutes([ Move.up(4) as any ]) )
    // const actions = education.driver.actions();
    // actions.keyDown(Key.ARROW_UP).pause(50).keyUp(Key.ARROW_UP).perform();
    res.send();
  });

  app.post('/personaje/girar/izquierda', (req, res) => {
    const actions = education.driver.actions();
    actions.keyDown(Key.ARROW_LEFT).pause(10).keyUp(Key.ARROW_LEFT).perform();
    res.send();
  });

  app.post('/personaje/girar/derecha', (req, res) => {
    const actions = education.driver.actions();
    actions.keyDown(Key.ARROW_RIGHT).pause(10).keyUp(Key.ARROW_RIGHT).perform();
    res.send();
  });

  app.post('/personaje/girar/abajo', (req, res) => {
    const actions = education.driver.actions();
    actions.keyDown(Key.ARROW_DOWN).pause(10).keyUp(Key.ARROW_DOWN).perform();
    res.send();
  });

  app.post('/personaje/girar/arriba', (req, res) => {
    const actions = education.driver.actions();
    actions.keyDown(Key.ARROW_UP).pause(10).keyUp(Key.ARROW_UP).perform();
    res.send();
  });

  app.get('/personaje/comprobar/cultivo', (req, res) => {
    const lugar = operations.checkPlant();
    res.send(lugar);
  });

  app.post('/personaje/sembrar/:cultivo', (req, res) => {
    const cultivo = req.params.cultivo;
    const lugar = operations.checkPlant();
    operations.plant(cultivo, lugar);
    res.send();
  });

  app.post('/personaje/recolectar', (req, res) => {
    const lugar = operations.checkPlant();
    operations.harvest(lugar);
    res.send();
  });

  app.post('/huerto/aparecer/:lugar/:cultivo', (req, res) => {
    const cultivo = req.params.cultivo;
    const lugar = req.params.lugar;
    operations.plant(cultivo, lugar);
    res.send();
  });

  app.post('/huerto/desaparecer/:lugar', (req, res) => {
    const lugar = req.params.lugar;
    operations.harvest(lugar);
    res.send();
  });
  
  app.post('/reset', (req, res) => {
    operations.reset(education);
    res.send();
  });

  app.post('/mensaje', (req, res) => {
    const mensaje = req.body.msg;   
    operations.mostrarMensaje(mensaje);
    res.send();
  });
}