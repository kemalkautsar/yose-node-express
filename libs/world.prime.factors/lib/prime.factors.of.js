primeFactorsOf = function(number) {
	var factors = [];
	var m = 0;
	while (number >= 2 ) {
		arr = [2,3,5,7];
		number % arr[m] > 0 ? m+=1 : '';
		if (number % arr[m] == 0) {
			factors.push(arr[m]);
		}
		number = number/arr[m];
	}
	return factors;
};

module.exports = primeFactorsOf;
