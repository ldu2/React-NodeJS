var Calculator = (function(){
	'use strict';
	const UNIT = 5280;

	function Calculator(){
		console.log("Source/Calculator.Constructor called");
	}
	
	Calculator.prototype.unit = function(){
		return UNIT;
	};

	Calculator.prototype.convert = function(feet){
		return UNIT*feet;
	};

	return Calculator;
}());

exports.calc = new Calculator();
