import { Node } from "../model/Node";
export class Table {
  //size:number=0;
  private nodes: (Node | null)[];
  constructor(size: number) {
    //console.log('size un table ', size)
    this.nodes=[];
    for(let i:number=0;i<size;i++){
      this.nodes[i] = null;
    }
    //console.log('Table : ',this.nodes)

  }


  getNodes():(null | Node) []{
    return this.nodes;
  }

  setNodes(nodes: Node[]): void {
    this.nodes = nodes;
  }
}
