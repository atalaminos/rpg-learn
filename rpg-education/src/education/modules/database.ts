export class Database {

  items: {};
  
  constructor() {
    this.items = {};
  }

  addItem(name: string, item: any) {
    this.items[name] = item;
  }

  getItem(name: string){
    return this.items[name];
  }

  getItems() {
    return this.items;
  }

  deleteItem(name: string, item: any) {
    delete this.items[name];
  }

  deleteItems() {
    this.items = {};
  }

}