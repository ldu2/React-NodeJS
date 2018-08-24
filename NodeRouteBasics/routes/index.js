var express = require('express');
var router = express.Router();

var calculator = require('../source/DistanceCalculator');
var circum = require('../routes/users');
/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'NodeRouteBasics' });
});

router.get('/unit',function(request, response){
	'use strict';
	console.log('unit page called');
	response.send({
		"result":calculator.calc.unit()
	});
});

router.get('/convert', function(request, response){
	'use strict';
	console.log('convert page called');
	console.log(request.query);
	var miles = parseInt(request.query.miles);
	var result = calculator.calc.convert(miles);
	response.send({
		"result":result
	});
});

router.post('/circumference',function(request, response){
	'use strict';
	console.log('circumference page called');
	console.log(request.body);
	var radius= parseInt(request.body.radius);
	var result = circum(radius);
	response.send({
		"result":result
	});
});

module.exports = router;
