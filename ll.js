// ll.js - demo for a javascript implementation of
// the linked list data structure
//
// Ryan Juve - codefellows 2013


// LinkedList Class
function LinkedList() {
	this.head = null;
}

// LinkedList prototype methods

//insert a new node at end of list
LinkedList.prototype.insert = function(dataVal) {
	if (this.head === null) {                    	// if empty list
		this.head = {data: dataVal, next: null}
	} else {										// not empty list
		var temp = this.head; 
		while (temp.next !== null) {				// traverse to end of list
			temp = temp.next;
		}
		temp.next = {data: dataVal, next: null};	// insert new node
	}
};
// delete node at given index, return deleted value
LinkedList.prototype.delete = function(index) {
	var temp = this.head,							// function vars
		counter = 0,
		toReturn = null;

	while (temp.next !== null) {					// traverse list
		if (counter === index) {				
			toReturn = temp.data;					// store value to return
			temp.data = temp.next.data;				// change node's references
			temp.next = temp.next.next;				// change node's references
			return toReturn;						
		}
		counter++;									// increment
		temp = temp.next;							// step through list
	}

	return toReturn;								// return value
};

// create instance of LinkedList, populate with values
var ll = new LinkedList()
for (var i=0; i<10; i++) {
	ll.insert(i.toString());
}
console.log(ll);
ll.delete(2);
console.log(ll);