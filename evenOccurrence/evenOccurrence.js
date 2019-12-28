/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

var evenOccurrence = function(array){

	var occ = {};
	//  we need to init the object to not have a problem of undefined +1 
	array.forEach(function(element){
		occ[element] =0;
	})
	// putting evry element of the array and his number of occurence
	array.forEach(function(element){
		occ[element]= occ[element] + 1;
		
	})
	// looping the array to find the first occurence of even number.
	for (var i = 0; i < array.length; i++) {
		var curent = array[i];

		if(occ[curent]%2 === 0){
			return curent;
		}
		
	}
	return null;

}



