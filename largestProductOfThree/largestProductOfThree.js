/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
	//var arr = array.sort();
	var prod = 1;
	//counting numbers of num < 0
	var countMin = 0 ;
	for (var i = 0; i < array.length; i++) {
		if (array[i]< 0) {
			
			countMin ++;
		}
	}
	
	
	if (!countMin % 2){
		var arr1 = array.sort();
		for (var i = arr1.length -1; i > arr1.length -4 ; i--) {
		prod = prod * arr1[i];
		}
	}

	// if (countMin % 2 === 0) {
	for (var i = 0; i < array.length; i++) {
		if (array[i]< 0) {
			array[i] = array[i]* -1 ;
		}
	}
	var arr = array.sort();
	for (var i = arr.length -1; i > arr.length -4 ; i--) {
		prod = prod * arr[i];
	}
	
	return prod ;
}
