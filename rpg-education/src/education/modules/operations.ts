import { RpgWorld, Direction, Move } from '@rpgjs/server'
const { Key  } = require('selenium-webdriver');

import { createItem } from './inventory';
import { CONSTANTS } from './../constants';

export const operations = {
  openInventory: (education) => {
    const actions = education.driver.actions();
    actions
    .keyDown(Key.ESCAPE).pause(50).keyUp(Key.ESCAPE)
    .pause(50)
    .keyDown(Key.ENTER).pause(50).keyUp(Key.ENTER)
    .perform();
  },

  closeInventory: (education) => {
    const actions = education.driver.actions();
    actions
    .keyDown(Key.ESCAPE).pause(50).keyUp(Key.ESCAPE)
    .pause(50)
    .keyDown(Key.ESCAPE).pause(50).keyUp(Key.ESCAPE)
    .perform();
  },

  getItem: (database, nombre: string): number => {
    let cantidad = 0;

    if(nombre) {
      const item = database.getItem(nombre);
      RpgWorld.getPlayers().forEach(player => cantidad = (player.getItem(item)?.nb) ? (player.getItem(item)?.nb) : 0);
    }
    return cantidad;
  },

  setItem: (database, nombre: string, cantidad: number) => {
    
    if((nombre) && (cantidad)) {
      const item = createItem(nombre)
      database.addItem(nombre, item);
      RpgWorld.getPlayers().forEach(player => player.addItem(item, cantidad));
    }
  },

  deleteItems: (database) => {
    const items = database.getItems();

    Object.keys(items).forEach(itemName =>  RpgWorld.getPlayers().forEach(player => {

      const inventory = player.getItem(items[itemName]);

      if (player.hasItem(items[itemName])) {
        player.removeItem(items[itemName], inventory.nb)
      }
      
    }));

    database.deleteItems();
  },

  plant: (cultivo: string, lugar: string) => {

    RpgWorld.getPlayers().forEach(player => {
      player.setVariable(CONSTANTS.HUERTO_CULTIVO, cultivo);
      player.setVariable(CONSTANTS.HUERTO_LUGAR, lugar);
      player.syncChanges();
    });  
  },

  harvest: (lugar: string) => {
    
    RpgWorld.getPlayers().forEach(player => {
      player.setVariable(CONSTANTS.HUERTO_CULTIVO, CONSTANTS.HUERTO_CULTIVO_TIERRA);
      player.setVariable(CONSTANTS.HUERTO_LUGAR, lugar);
      player.syncChanges();
    });  
  },

  checkPlant: (): string => {

    let lugar = '';

    RpgWorld.getPlayers().forEach(player => {

      if (player.getDirection() === Direction.Up) {


        // h1
        if ((player.position.x >= 90) && (player.position.x <= 125) && (player.position.y <= 195) && (player.position.y >= 190)) {
          lugar = 'h1';
        }

        // h2
        else if ((player.position.x >= 150) && (player.position.x <= 185) && (player.position.y <= 195) && (player.position.y > 190)) {
          lugar = 'h2';
        }

        // h3
        else if ((player.position.x >= 90) && (player.position.x <= 125) && (player.position.y <= 260) && (player.position.y > 255)) {
          lugar = 'h3';
        }

        // h4
        else if ((player.position.x >= 150) && (player.position.x <= 185) && (player.position.y <= 260) && (player.position.y > 255)) {
          lugar = 'h4';
        }
      }
    });
    return lugar;
  },

  reset: (education) => {
    
    operations.harvest(CONSTANTS.HUERTO_LUGAR_H1);
    operations.harvest(CONSTANTS.HUERTO_LUGAR_H2);
    operations.harvest(CONSTANTS.HUERTO_LUGAR_H3);
    operations.harvest(CONSTANTS.HUERTO_LUGAR_H4);
    RpgWorld.getPlayers().forEach(player => {
      player.position.x = 371;
      player.position.y= 356;
      player.teleport(player.position);
      const actions = education.driver.actions();
    actions.keyDown(Key.ARROW_DOWN).pause(10).keyUp(Key.ARROW_DOWN).perform();
    });
  },

  mostrarMensaje: (mensaje) => {
    
    RpgWorld.getPlayers().forEach(player => {
      player.showText(mensaje);
    });
  }
}

