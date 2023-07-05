export class Node {
  private value: string;
  private next: Node | null;


  constructor(value: string) {
    this.value = value;
    this.next = null;

  }
  public getValue(): string {
    return this.value;
  }

  public getNext(): Node | null {
    return this.next;
  }

  public setValue(value: string): void {
    this.value = value;
  }

  public setNext(next: Node | null): void {
    this.next = next;
  }
}
