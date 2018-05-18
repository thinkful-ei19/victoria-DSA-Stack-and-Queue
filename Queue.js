'use strict'
class _Node {
  constructor(value) {
    this.value=value,
    this.next=null,
    this.prev=null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = node.prev;

    if(node === this.last){
      this.last = null;
    }

    return node.value;
  }
}

function peek(q){
  return q.first.value;
}

function display(q) {
  let tempNode = q.first;
  let result = peek(q);
  while (tempNode !== q.last) {
    tempNode = tempNode.prev;
    result = `${tempNode.value}, ${result}`;
  }
  return result;
}

function main(){
  const starTrek = new Queue()
  starTrek.enqueue('Kirk')
  starTrek.enqueue('Spock')
  starTrek.enqueue('Kirk')
  starTrek.enqueue('McCoy')
  starTrek.enqueue('Scotty')
  starTrek.dequeue('Spock')
  starTrek.dequeue('Spock')
  console.log(display(starTrek))
}
 main()
