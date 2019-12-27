/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
  	this.storage = [];
  	this.head = this.storage.length ;

  // add an item to the top of the stack
    this.push = function(value) {
    	this.storage.push(value);
    };

  // remove an item from the top of the stack
    this.pop = function() {
    	this.storage.pop();
    };

  // return the number of items in the stack
    this.size = function() {
    	var count = 0;
    	for (var i = 0; i < storage.length; i++) {
    		count ++ ;
    		
    	}
    };
  
  // return the minimum value in the stack
    this.min = function() {
    	var min = storage[0];
    	for (var i = 0; i < storage.length; i++) {
    		if(min > storage[i]){
    			min = storage[i];
    		}
    	}
    	return min ;

    };

  };

// constant time means that it is O(1) so we
// should not use an array 

var Stack = function() {
	this.storage = {};
	this.minVal = 0;
	var arr = [];

	this.push = function(value){
		this.storage[Object.keys(this.storage).length] = value;
		arr.push(value)
		arr.sort();
		console.log(arr);

	}

	this.pop = function(){
		delete this.storage[Object.keys(this.storage).length];
	}

	this.size = function(){
		return this.storage[Object.keys(this.storage).length];
	}

	this.min = function(){
		return arr[arr.length];


	}

}
