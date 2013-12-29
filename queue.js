// queue.js - demo for a javascript implementation of
// the queue data structure
//
// Ryan Juve - codefellows 2013

// Queue class
var Queue = function(){
	this.length = 0;	
	this.front = null;
};
// Node Class
var Node = function(data){
	this.data = data;
	this.prev = null;
}

 // Queue class prototype methods
Queue.prototype = {
	//add node to back of queue
	enqueue: function(data){
		//increment length counter
		this.length++			
		//if node is empty, fill with data	
		if (!this.node) {
			this.node = new Node(data);
			// initialize front of queue pointer
			this.front = this.node;
		} 
		// if node is filled, create new node and point it to next element of queue
		else {
			var temp = new Node(data);
			this.node.prev = temp;
			this.node = temp;
		}
	},
	//remove node from front of queue and run its data through an optional callback
	dequeue: function(callback) {
		//decrement length counter
		this.length--;

		// save front element to temp var
		var temp = this.front.data;
		// make this.front point to current front's prev
		this.front = this.front.prev;
		// if callback function present, pass it front's data from temp var, else console.log message
		if (callback){
			callback(temp);
		} else {console.log("no callback, value of dequeued element was "+temp);}
	},
	// returns current queue length
	size: function() {
		return this.length;
	}
};

// instantiate new Queue and enqueue values
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.size();
console.log(queue);
// do some dequeue stuff
queue.dequeue();
queue.dequeue(function(data){
	data*=2;
	console.log("data times 2 is: "+data);
});
queue.dequeue();
queue.size();
console.log(queue);