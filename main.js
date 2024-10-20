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
console.log(JSON.stringify(list));
list.toString();
console.log('\n----------------------------------------------------\n');