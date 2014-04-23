if (!Array.prototype.swap) {

	/**
	 * Swap array elements position
	 * 
	 * @param {number} x - index position
	 * @param {number} y - index position
	 * 
	 * return {object} this
	 */
	var swap = function(x, y) {
		this[x] = this.splice(y, 1, this[x])[0];
		return this;
	};
	
	// Extending Array.prototype
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
	
	// assign swap
	Array.prototype.swap = swap;
	
	module.exports =  swap;
}