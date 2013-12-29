// bst.js -- a binary search tree object implemented in js
// Ryan Juve --  codefellows 2013

// Node Class
function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}
// Node prototype
Node.prototype = {
	contains: function(data) {
		if (data === this.data) {
			return true;
		} else {
			return false;
		}
	}
};

// BST class
function BST(array) {
	this.length = 0;
	this.depth = 0;
	if (array) {
		array.forEach(function(value){
			this.addNode(value);
		}, this);
	}
}
// BST prototype
BST.prototype = {
	addNode: function(data){
		this.length++;
		if (!this.node) {
			this.depth++;
			this.node = new Node(data);
		} else {
			var current = this.node;
			var depth = 1;

			while(true) {
				if (current.data > data) {
					if (current.left === null) {
						current.left = new Node(data, current);
						break;
					} else {
						depth++;
						current = current.left;
					}
				} else if (current.data < data) {
					if (current.right === null) {
						current.right = new Node(data, current);
						break;
					} else {
						depth++;
						current = current.right;
					}
				} else {
					break;
				}
			}

			this.depth = depth > this.depth ? depth : this.depth;
		}
	},
	size: function() {
		return this.length;
	},
	height: function() {
		return this.depth;
	},
	contains: function (data) {
		for (var node=this.node; node;) {
			if (node.contains(data)) return true;
			node = (data < node.data) ? node.left : node.right;
		}
		return false;
	}
};

var bst = new BST([9,52,42,56,74,98,63,41,25,84,62,14,69,71,3,62,14,7,2,1,61,14,7]);
bst.size();
bst.height();
bst.contains(98);
bst.contains(9000);