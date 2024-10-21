/*
const LinkedList = require('./linkedList');
const Node = require('./listNode.js');
*/

import {LinkedList} from "./linkedList.js";
import {Node} from "./listNode.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
console.log('\n----------------------------------------------------\n');
list.append("cat");
console.log('\n----------------------------------------------------\n');
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log('\n----------------------------------------------------\n');
list.toString();
console.log('\n----------------------------------------------------\n');
list.prepend("ant");
console.log('\n----------------------------------------------------\n');
list.toString();
console.log('\n----------------------------------------------------\n');
console.log('head node at index = 0 ', list.at(0));
console.log('interim node at index = 3 ',list.at(3));
console.log('tail node at index = 6 ',list.at(6));
console.log('Error at index = 7',list.at(7));           // OK ERROR RESPONSE REQUIRED
console.log('\n----------------------------------------------------\n');
list.toString();
console.log('list tail is: ',list.tail.value,' :pop() (i.e. tail) returns: ', list.pop());
list.toString();
console.log('\n----------------------------------------------------\n');
list.toString();
console.log('list contains snake? ', list.contains('snake'));
console.log('list contains rabbit? ',list.contains('rabbit'));
console.log('\n----------------------------------------------------\n');
console.log('\n----------------------------------------------------\n');
list.toString();
console.log('list contains snake at index: ', list.find('snake'));
console.log('list contains rabbit at index ', list.find('rabbit'));
console.log('\n----------------------------------------------------\n');
