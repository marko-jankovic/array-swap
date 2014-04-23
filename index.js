if (!Array.prototype.swap) {

	module.exports = Array.prototype.swap = function(x, y) {

		this[x] = this.splice(y, 1, this[x])[0];
    	return this;

	}(Array.prototype.swap);
}	