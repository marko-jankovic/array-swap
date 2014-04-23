if (!Array.prototype.swap) {

	var swap = function(x, y) {

		this[x] = this.splice(y, 1, this[x])[0];
		return this;
	};
	
	if (Object.defineProperty) {
		try {
			Object.defineProperty(Array.prototype, 'swap', {
				value: swap,
				configurable: true, 
				enumerable: false,
				writable: true
			});
	    } catch(e) {}
	}
	
	Array.prototype.swap = swap;
	
	module.exports =  swap;
}