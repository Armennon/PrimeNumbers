module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},
	isPrimeForRange: function(start, end){
		let array = [];
		if(start > end)
			this.isPrimeForRange(end, start);
		for(let i = start; i <= end; i ++)
		{
			if(this.isPrime(i))
				array[array.length] = i;
		}
		return array;
			
	},
	arrayElements: function(array) {
		let result = " ";
		for(let i = 0; i < array.length; i++){
			result += array[i] + " ";
		}
		return result;
	}
}

