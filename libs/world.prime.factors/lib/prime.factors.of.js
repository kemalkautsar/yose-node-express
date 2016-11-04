primeFactorsOf = function(number) {
	var factors = [2];
	while (number > 2 ) {
		number % 2 >= 0 ? factors.push(2) : factors.push(1);
		number = number/2;
	}
    // for (i=1;i<5;i++){
    //     number % 2 >= 0 ? factors.push(2) : factors.push(1);
	// 	number = number/2;
    // }
	return factors;
};

module.exports = primeFactorsOf;
