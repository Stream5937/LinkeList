//A Node class, containing a value property and a nextNode property,
//both set as null by default.


class Node {
    //private variables
    _value = null;          //the object data
    _nextNode = null;       //the next node
   // index not needed use counter see list  
                            //incremented  by 1 for each appended Node 
                            //initially head becomes 1 but tail also 1
                            //but each appended Node becomes tail = 2 , 3, 4 ....etc

    //constructor
    constructor (value, nextNode) {
        //cater for incorrect invocation i.e not using 'new' keyword
        if(!(this instanceof Node)) {
             //throw error:
             throw Error('Error: Incorrect invocation needs new key word');
             //or
             //return new Node:
            // return new Node(value, nextNode);
         }else{
          //the node
          this._value = value;                //node content
          this._nextNode = nextNode;          //the next node              
        }
      }

    //class getters & setters
    get value () {
        return this._value; 
    }
    set value (value) {
        this._value = value; 
    }
    get nextNode () {
        return this._nextNode; 
    }
    set nextNode (nextNode) {
        this._nextNode = nextNode; 
    }
    
    logNodeValue () {
        console.log('@logNodeValue: ');
        console.log('--> ( ',this.value,' ) ');
    }
}


export { Node} ;