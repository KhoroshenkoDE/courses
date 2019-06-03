var clc = require('cli-color');

var Area = function(a, b) {
	this.a = a;
	this.b = b;
};

Area.prototype.areaRectangle = function(a, b) {
	if (b == undefined) b = a;
	return clc.red(a * b);
}; 

Area.prototype.areaCircle = function(r) {
	var p = 3.14;
	return clc.green(2 * p * r);
};

module.exports = Area;
console.log(clc.red('sdfsdfsdf'));