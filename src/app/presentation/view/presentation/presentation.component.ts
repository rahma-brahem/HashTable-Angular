import {Component, ElementRef, ViewChild} from '@angular/core';
import {HashtableController} from "../../controller/HashtableController";
import {Service} from "../../../service/Service";
import {Table} from "../../../model/Table";
import {MenuItem} from "primeng/api";
import {Node} from "../../../model/Node";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  title = 'Hashtable-with-Angular';
  size?: number;
  table: Table = new Table(0);
  service: Service = new Service(this.table)
  controller: HashtableController = new HashtableController(this.service);
  items: MenuItem[] | undefined;
  visibleAbout: boolean = false;
  visibleNewTable: boolean = false;
  visibleAdd: boolean = false;
  visibleRemove: boolean = false;
  nameToRemove?: string;
  name?: string | null;
  hashMap = new Map<string, number []>();
  visibleQuit?: boolean;
  a?: number;
  b?: number;

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            command: () => this.visibleNewTable = true,
          },
          {
            label: 'ADD',
            icon: 'pi pi-fw pi-trash',
            command: () => this.visibleAdd = true,
          },
          {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off',
            command: () => this.visibleQuit = true,
          }


        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'About',
            icon: 'pi pi-fw pi-align-left',
            command: () => this.visibleAbout = true,
          },

        ]
      },


    ];

  }

  @ViewChild('canvas', {static: false})
  canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {

  }

  draw() {
    let x = 100;
    let y = 100;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    canvasEl.width = 1200
    canvasEl.height = 1200;
    canvasEl.addEventListener("click", (e) => {
      this.a = e.offsetX;
      this.b = e.offsetY;
      console.log(this.a);
      console.log(this.b);
      this.showRemoveDialag();

    });

    const ctx = canvasEl.getContext('2d');
    console.log(this.controller.getService().table);
    if (this.size != null) {
      if (this.name != null) {
        let node = new Node(this.name);
        this.controller.getService().add(node.getValue());
        console.log(this.controller.getService().table.getNodes());
      }
      let nodes: (Node | null)[] = this.controller.getTable().getNodes();
      if (ctx) {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        ctx.fillStyle = "black";
        for (let i = 0; i < this.size; i++) {
          ctx.strokeRect(x, y + i * 100, 100, 100);
          let n: Node | null = nodes[i];
          let xPos: number = 220;
          if (n == null) {
            this.drawnull(i, xPos, canvasEl, ctx);
          }

          while (n != null) {
            xPos = xPos + 120;
            this.drawNode(i, n, x, y, xPos, canvasEl, ctx);
            if (n.getNext() == null) {
              this.drawnull(i, xPos, canvasEl, ctx);
            }
            n = n.getNext();
          }

        }
      }

    }

    this.name = null;

  }


  onDrawTable() {
    this.visibleNewTable = false;
    if (this.size != null) {
      this.table = new Table(this.size!);
      this.service = new Service(new Table(this.size));
      this.controller = new HashtableController(this.service);
      this.controller.setService(this.service);
    }
    this.draw();
  }

  onDrawAfterRemove() {
    this.controller.getService().remove(this.nameToRemove!);
    this.hashMap.delete(this.nameToRemove!);
    this.visibleRemove=false;
    this.draw();

  }
  Animate(){

  }

  /*onAdd(){
    this.visibleAdd=false;
    this.controller?.getService().add(this.name);
    console.log(this.controller?.getService().add(this.name));
    this.draw();
  }*/
  drawNode(i: number, n: Node, x: number, y: number, xPos: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(xPos - 100 - 40, 150 + i * 100);
    ctx.lineTo(xPos - 100 - 20, 150 + 100 * i);
    ctx.stroke();
    ctx.strokeRect(xPos - 120, y + 25 + 100 * i, 100, 50);
    ctx.font = "22px serif";
    ctx.fillText(n.getValue(), xPos - 100 + 3, 150 + i * 100);

    this.hashMap.set(n.getValue(), [xPos - 120, y + 25 + 100 * i]);
    console.log(this.hashMap);
  }

  drawnull(i: number, xPos: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    //draw ----


    ctx.beginPath();
    ctx.moveTo(xPos - 20, 150 + i * 100);
    ctx.lineTo(xPos, 150 + 100 * i);
    ctx.stroke();
    //draw |


    ctx.beginPath();
    ctx.moveTo(xPos, 125 + 100 * i);
    ctx.lineTo(xPos, 175 + 100 * i);
    ctx.stroke();


  }

  showRemoveDialag() {

    for (const key of this.hashMap.keys()) {
      if (this.hashMap.get(key)![0] <= this.a! && this.a! <= this.hashMap.get(key)![0] + 100 && this.hashMap.get(key)![1] <= this.b! && this.b! <= this.hashMap.get(key)![1] + 50) {
        this.visibleRemove = true;
        this.nameToRemove=key;

      }
    }
  }


  }



