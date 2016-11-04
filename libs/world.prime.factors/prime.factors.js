var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {
	var number = parseInt(request.query['number']);
    var decomposition = primeFactorsOf(number);
	var result = isNaN(number) ? {number: request.query['number'] == "" ? null : request.query['number'], error: "not a number"} : {number: number, decomposition: decomposition};
	response.setHeader('Content-Type', 'application/json');

    response.send(JSON.stringify(result));

};

module.exports = primeFactors;
