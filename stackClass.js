'use strict';

class _StackNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
       if (this.top === null) {
           this.top = new _StackNode(data, null);
           return this.top;
       }
       const node = new _StackNode(data, this.top);
       this.top = node;
   }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack){
  return stack.top.value;
}

function display(stack) {
  let tempNode = stack.top;
  let result = peek(stack);
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
    result = `${tempNode.value}, ${result}`;
  }
  return result;
}

function main(){
  const starTrek = new Stack()
  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')
  starTrek.pop('McCoy')
  starTrek.pop('McCoy')
  starTrek.push('Scotty')
console.log(display(starTrek))
}
 main()
