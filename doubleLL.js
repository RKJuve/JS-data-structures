// doubleLL.js -  a doubly linked list object creator
// Ryan Juve - codefellows 2013


//declare DoubleLL class
function DoubleLL() {
    this.head = null;
    this.tail = null;  
};
// declare Node class
function Node(data, next, prev) {
    this.data = data || null;
    this.next = next || null;
    this.prev = prev || null;
};

//add DoubleLL class methods
DoubleLL.prototype = {
    append: function(data) {
        if (!this.head) {
            this.head = this.tail = new Node(data);
        } else {
            var temp = new Node(data, this.tail);
            this.tail.prev = temp;
            this.tail = temp;
        }
    },
    prepend: function(data) {
        if (!this.head) {
            this.head = this.tail = new Node(data);
        } else {
            var temp = new Node(data, null, this.head);
            this.head.next = temp;
            this.head = temp;
        }
    },
    pop_front: function(callback){
        // store data for callback
        var argData = this.head.data;
        // head remove
        this.head.remove(this);
        //fire callback if present
        if (callback) {
            callback(argData);
        } else {console.log("no callback function, popped data value was: "+argData);}
    },
    pop_back: function(callback){
        // store data for callback
        var argData = this.tail.data;
        //tail remove
        this.tail.remove(this);
        //fire callback if present
        if (callback) {
            callback(argData);
        } else {console.log("no callback function, popped data value was: "+argData);}
    }
};

// Node class remove method
Node.prototype.remove = function(that) {
    if (this.next === null){
        that.head = this.prev;
        delete that.head.next;
    } else {
        that.tail = this.next;
        delete that.tail.prev;
    }
};

// instantiate list
var doubleLL = new DoubleLL();

// append some data
doubleLL.append(1);
doubleLL.append(2);
doubleLL.append(3);
doubleLL.append(4);
doubleLL.append(5);

console.log(doubleLL);

// pop dat data out
doubleLL.pop_back();
doubleLL.pop_front();
doubleLL.pop_back();

console.log(doubleLL);