// ll.js - demo for a javascript implementation of
// the linked list data structure
//
// Ryan Juve - codefellows 2013
// TODO:
// -deleting from heap

var MinHeap = function(){
	this.heap = new Array();
};

MinHeap.prototype.heapifyDown = function(childIndex, parentIndex){
	var child = this.heap[childIndex];
	var parent = this.heap[parentIndex];
	if (child > parent || !parent) {
		return;
	}
	this.heap[parentIndex] = child;
	this.heap[childIndex] = parent;
	if (this.heap[parentIndex] < this.heap[Math.ceil(parentIndex/2)-1]) {
		this.heapifyDown(parentIndex, Math.ceil(parentIndex/2)-1);
	}
}

MinHeap.prototype.insert = function(data) {
	this.heap.push(data);
	this.heapifyDown(this.heap.length-1,Math.ceil(this.heap.length/2)-1);
};

MinHeap.prototype.peek = function(){
	return this.heap[0];
};

MinHeap.prototype.reHeapifyDown = function(childIndex){
	if (this.heap[childIndex] < this.heap[Math.ceil(childIndex/2)-1]) {
		var temp = this.heap[Math.ceil(childIndex/2)-1];
		this.heap[Math.ceil(childIndex/2)-1] = this.heap[childIndex];
		this.heap[childIndex] = temp;
	}
	if (this.heap[childIndex-1]) {
		this.reHeapifyDown(childIndex-1);
	}
}

MinHeap.prototype.popMin = function(){
	console.log(this.heap.shift());
	this.reHeapifyDown(this.heap.length-1);
}

var heap = new MinHeap();
heap.insert(15);
heap.insert(6);
heap.insert(8);
heap.insert(1);
// heap.popMin();
heap.insert(13);
heap.insert(3);
// heap.popMin();
heap.insert(5);
heap.insert(7);
heap.insert(11);
heap.insert(9);
// heap.popMin();
heap