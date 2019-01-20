import { listenerCount } from "cluster";

interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  // print(): void;
}

export class Stack<T> implements IStack<T> {
  private list: Array<T>;

  constructor() {
    this.list = new Array<T>();
  }

  length(): number {
    return this.list.length;
  }

  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;

  push(items: T | T[]): IStack<T> {
    if (items instanceof Array) {
      this.list.push(...items);
    } else {
      this.list.push(items);
    }
    return this;
  }

  pop(): T | undefined {
    if (this.list.length === 0) {
      return undefined;
    } else {
      return this.list.pop();
    }
  }
}


// let s = new Stack<number>();
// console.log(s.length());
