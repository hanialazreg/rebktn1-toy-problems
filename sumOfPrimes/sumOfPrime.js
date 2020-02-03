/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
	// test if it is a prime number or not 
	// if prime add it to the sum
    // prime can be presenteted only n*1 .

    	var primesum = 0;
    	var isprime = false ;

    	function isPrime(num){

  //test if number is prime
		  for(var i=2; i < num; i++){
		    if(num % i === 0){
		      return false;
		    }
		  }
		  return true;
		}


    	for (var i = 2; i < n; i++) {
    		isprime = isPrime(i)
    		if (isprime ===true) {
    			primesum += i
    		}
    	}
    	return primesum ;
    	
  
}
