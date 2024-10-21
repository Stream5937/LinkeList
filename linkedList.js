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

    /*
        NB all implemented as getters
        size returns the total number of nodes in the list
        head returns the first node in the list
        tail returns the last node in the list
    */

    //at(index) returns the node at the given index
    at (index) {
        let count = 0;
        let node;
        if(this.head == null ) {console.log ('invalid index: list returns null'); return; }
        node = this.head;
       // console.log('head.nextNode.nextNode: ',node.nextNode.nextNode.value);
        if(index === 0){return node;}   //returning head
        do {
            count++;
            if(count >= this.size){console.log('invalid index: list returns tail before index!'); return;}
            if(!(count > index) ){
                node = node.nextNode;
                if(index === count){console.log('returning at index === count: ',count);return node;}
            }else{node = null;}
        }while((count < this.size));  
    }

    //  pop removes the last element from the list ( and returns its value?)
    pop () {
        //console.log('at: pop')
        let size = this.size;
        //console.log('size: ',size);
        //handle empty list
        if(size === 0){console.log('Invalid: Returning empty list!');}

        let count  = 0;
        let current = this.head;                    // ant
        let nodeNext  = this.head.nextNode;         // dog
        
        //handle list is just head
        if (size === 1) {
            console.log('Removing head - list now empty');
            let value = this.head.value; 
            this.head = null;
            this.size--;
            return value;
        }

        //handle pop the tail leaving remainder of list with new tail
        //size is 2 or greater                      // say ant --> dog --> goat      (size is 3)
        do{                                         // count here initially = 0
            //console.log('count: ', count);
            if (count === size-2) {                 // say count = 3-2 = 1
                //reached intended new tail
                this.tail = current;                // dog
                current.nextNode = null;            // null
                this.size--;                        // size = 2         
                return nodeNext.value;              // return goat 
            }else{
                count++;                            // 0 -> 1, 
                current = nodeNext;                 // ant -> dog                        
                nodeNext = nodeNext.nextNode;       // dog -> goat
            }    				
        }while(count < size);
    }

    //contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains (value) {
        let doesContain = false;
        let count = 0;
        let node = this.head;
        do{
            if(node.value === value){
                doesContain = true;
                return doesContain;     //true
            }
            else{
                node = node.nextNode;
            }
            count++;
        }while (count < this.size);
        return doesContain;             //false
    }

    //find(value) returns the index of the node containing value, or null.
    find (value) {
        let doesContain = false;
        let count = 0;
        let node = this.head;
        do{
            if(node.value === value){
                doesContain = true;
                return count;           //true count is index
            }
            else{
                node = node.nextNode;
            }
            count++;
        }while (count < this.size);
        return null;                    //false so null
    }

    //toString represents LinkedList objects as strings for preview in the console. 
    //The format being: ( value ) -> ( value ) -> ( value ) -> null

    toString () {
        //console.log('list size: ',this.size);
        if(this.size ===  0){
            console.log('null');
        }else{ 
          // console.log('logging list: ');
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