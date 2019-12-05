/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.
characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
characterFrequency("") -->  [ ]
*/

function characterFrequency(string){
	//convert to ascii code then sort the array and count charfrequency.
	var arr = string.split('');
	var str = "";
	var fstr = "";
	var arr2 = [];
	var cnt = 1;
	var farr = [];
	for (var i = 0; i < arr.length; i++) {
		str+= arr[i];
	}
	for (var i = 0; i < str.length; i++) {
		fstr+= " " + str.charCodeAt(i);
	}
	arr2 = fstr.split(" ");
	arr2.sort();

	for (var i = arr2.length; i > 0; i--) {
		cnt =count(arr2,arr2[i]);
	
		farr.push(String.fromCharCode(arr2[i]));
		farr.push(cnt);
		
	}
	return farr;
	
}

function count(array,char){
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		if(array[i] === char){
			count ++;
		}
	}
	return count ;
}




	// var str = "";
	// for (var i = 0; i < string.length; i++) {
	// 	str = str + " " +string.charCodeAt(string[i]);
	// }
	// return str
// 	string
// 	var arr2 = [];
// 	if(string.length === 0){
// 		return [];
// 	}
// 	var arr = string.split('');
// 	for (var i = 0; i < arr.length; i++) {
// 		arr2.push(charCodeAt(arr[i]))
// 	}


// return arr2;
}

