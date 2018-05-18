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
    this.top = this.top.next;
    return node.value;
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


// function main(){
//   const starTrek = new Stack()
//   starTrek.push('Kirk')
//   starTrek.push('Spock')
//   starTrek.push('McCoy')
//   starTrek.push('Scotty')
//   starTrek.pop('McCoy')
//   starTrek.pop('McCoy')
//   starTrek.push('Scotty')
//   console.log(display(starTrek))
// }
//  main()

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let newStack = new Stack();
  for (let i = 0; i< string.length; i++){
    newStack.push(string[i]);
  }
  for (let j = 0; j < string.length; j++){
    if(newStack.pop() !== string[j]) return false
  }
  return true
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function parentheses(str) {
  const openStack = new Stack();

  for(let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      openStack.push(str[i]);
    }
    if( str[i] === ')' || str[i] === ']' || str[i] === '}') {
      if(peek(openStack) === '(' && str[i] === ')'){
        openStack.pop();
      }
      if(peek(openStack) === '[' && str[i] === ']'){
        openStack.pop();
      }
      if(peek(openStack) === '{' && str[i] === '}'){
        openStack.pop();
      }
    }
  }
  if(!openStack) {
    return false
  } else {
    return true
  }
}

//console.log(parentheses('{[(}'))

function sort(stack) {
  let numStack = new Stack();
  while (stack.top) {
    let value = stack.pop();
    while (numStack.top && peek(numStack) > value) {
      stack.push(numStack.pop());
    }
    numStack.push(value);
  }
  return display(numStack);
}

const input = new Stack();
input.push(137)
input.push(5)
input.push(815)
input.push(8)
input.push(9)
input.push(1)
console.log(sort(input))
