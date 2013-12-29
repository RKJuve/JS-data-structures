// hash.js - demo for a javascript implementation of
// the hash data structure
//
// Ryan Juve - codefellows 2013
//
// TODO: make it work haha

var Hashtable = function(capacity, hashFn) {
	var _hash = this._hash = new Array(capacity);
	this._elementsInserted = 0;
	hashFn = hashFn || function(key, capacity) {
		return key % capacity;
	};
	this._hashFn = function(key) {
		return hashFn(key, _hash.length);
	};
};

Hashtable.prototype.insert = function(key, value) {
	var index = this._hashFn(key);
	if(!this._hash[index]) {
		this._hash[index] = [];
	}
	var chain = this._hash[index];
	for (var i=0; i<chain.length; i++){
		if (chain[i].key == key) {
			chain[i].value = value;
			return;
		}
	}

	chain.push({k: key, v: value})
	this._elementsInserted++;
};

Hashtable.prototype.has = function(key) {
	var index = this._hashFn(key);
	if (!this._hash[index]){
		return false;
	}

	var chain = this._hash[index];
	for (var i = 0; i < chain.length; i++) {
		if (chain[i].key == key) {
			return true;
		}
	}
	return false;
};

Hashtable.prototype.percentFull = function() {
	var used = 0;
	for (var i=0; i<this._hash.length; i++) {
		if (this._hash[used] && this._hash.length > 0) {
			used++;
		}
	}
};