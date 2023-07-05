import { Table } from "../model/Table";
import { Node } from "../model/Node";

export class Service{
   table:Table;
  constructor(table:Table){
    this.table=table;
  }
  add(value: string): boolean {
    console.log("rahma is here")
    if (this.find(value)) {
      return false;
    } else {
      let index = this.hash(value);
      let node = new Node(value);


      if (this.table.getNodes()[index] === null) {
        this.table.getNodes()[index] = node;
      } else {
        let  currentNode: Node | null = this.table.getNodes()[index];
        while (currentNode!.getNext() !== null) {
          currentNode = currentNode!.getNext();
        }
        currentNode!.setNext(node) ;
      }
      return true;
    }
  }
  hash(value: string): number {
    console.log("jihed is here")
    let s = 0;
    let x = value.length - 1;
    let charr = value.split("");
    for (let i = 0; i < charr.length; i++) {
      s = s + charr[i].charCodeAt(0) * Math.pow(31, x);
      x = x - 1;
    }
    return s % this.table.getNodes().length;
  }
  find(value: string): boolean {
    let index = this.hash(value);
    let currentNode: Node | null = this.table.getNodes()[index];

    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return true;
      }
      currentNode = currentNode.getNext();
    }

    return false;
  }

  remove(value: string): boolean {
    const index = this.hash(value);
    let currentNode: Node | null = this.table.getNodes()[index];
    let prevNode: Node | null = null;

    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        if (prevNode === null) {
          this.table.getNodes()[index] = currentNode.getNext();
        } else {
          prevNode.setNext(currentNode.getNext()) ;
        }
        return true;
      }
      prevNode = currentNode;
      currentNode = currentNode.getNext();
    }

    return false;
  }

  getTable(): Table {
    return this.table;
  }

  setTable(value: Table) {
    this.table = value;
  }
}
