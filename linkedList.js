//A LinkedList class, which represents the full list.

/*
linked list class:

    append(value) adds a new node containing value to the end of the list
    prepend(value) adds a new node containing value to the start of the list
    size returns the total number of nodes in the list
    head returns the first node in the list
    tail returns the last node in the list
    at(index) returns the node at the given index
    pop removes the last element from the list
    contains(value) returns true if the passed in value is in the list and otherwise returns false.
    find(value) returns the index of the node containing value, or null.
    toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null or null if not found.
    
Extra:
    insertAt(value, index) that inserts a new node with the provided value at the given index.
    removeAt(index) that removes the node at the given index.
    Tip: When you insert or remove a node, consider how it will affect the existing nodes. 
    Some of the nodes will need their nextNode link updated.
*/

//const Node = require('./listNode');
import {Node} from "./listNode.js";

class LinkedList {

    //private variables
    _listName;
    _head= null;       //of class Node: the first node -> initially points to null
    _tail= null;       //of class Node: the last  node -> initially same as head node
    _size= null;       //the current number of nodes
   

    //constructor
    constructor (){
        //cater for incorrect invocation i.e not using 'new' keyword
        if(!(this instanceof LinkedList)) {
            //throw error:
            throw Error('Error: Incorrect invocation needs new key word');
            //or
            //return new LinkedList:
           // return new LinkedList(listName, nodeValue );
        }else{
         //the node
        // this._listName = listName;
         this._head = null ;                             //first node points to null
         this._tail = this.head;                         //first tail == head 
         this._size = 0;                                 //initially just the head pointer to null
         
       }

    }

    //getters and setters
    get listName () {
        return this._listName;
    }
    set listName (listName) {
        this._listName = listName;
    }

    get tail () {
        return this._tail;                           //returns object of class Node
    }

    set tail (node) {
        this._tail = node;
    }

    get head () { 
        return this._head;       //returns object of class Node
    }

    set head (node) {
        this._head = node;
    }

    get size () {
        return this._size;       //the current number of nodes
    }

    set size (newSize) {
        //increment size
        this._size = newSize;
    }

    //member functions
    //at(index) returns the node at the given index
    at(index) {
         let nodeAtIndex;
         let currentNode = this.head;
         if(currentNode.nextNode === null){console.log('No such element: empty list');}
         if(currentNode.index === index){return currentNode;}
         let next = currentNode.nextNode;
         while(next.nextNode != null){
            if(next.index === index){
                return next;                //returns the node  @ index
            }else{
                next = next.nextNode;
            }
         }
         console.log('Node @ index: ',index,' not found');
    }

   //append(value) adds a new node containing value to the end of the list
   append(value){
        if(this.size === 0){
            console.log('creating head');
            let index = 1;
            let nextNode = null;
            this.head = new Node(value,nextNode);
            this.tail = this.head;
            this.size = this.size + 1;
            this.head.logNodeValue;
        }else{
            this.tail.logNodeValue();				    //show current tail
            console.log('appending: ',value);			//show we are appending
            let newNode = new Node(value, null);		//create new tail node
            this.tail.nextNode = newNode;               //set current tail to point to newNode
            this.size++;                        		//increment the list size     
            this.tail = newNode;			            //new node becomes new tail
            this.tail.logNodeValue();
        }
    }
    

    //prepend(value) adds a new node containing value to the start of the list
    prepend (value) {
        let newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }


    //toString represents LinkedList objects as strings for preview in the console. 
    //The format being: ( value ) -> ( value ) -> ( value ) -> null

    toString () {
        console.log('list size: ',this.size);
        if(this.size ===  0){
            console.log('null');
        }else{ 
           console.log('logging list: ');
           let list = "linked list : ";
           let node = this.head;
           list += " ( ";
           list += node.value;
           list += " ) ";
           do {
            list += " --> ";
            node = node.nextNode;
            list += " ( ";
            list += node.value;
            list += " ) ";
           }while(node.nextNode != null);
           list += " -->  null";
           console.log(list);
        }
    }

}

export { LinkedList };