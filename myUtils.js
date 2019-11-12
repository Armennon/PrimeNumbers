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
		array = [];
		if(start > end)
			this.isPrimeForRange(end, start);
		for(i = start; i <= end; i ++)
		{
			if(this.isPrime(i))
				array[array.length] = i;
		}
		return array;
			
	}
}
