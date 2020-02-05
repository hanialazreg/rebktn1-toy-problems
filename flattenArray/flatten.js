/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/

// first solution 
function flatten(arr) {
	var flat = [];
  for (var i = 0; i < arr.length; i++) {
  	if(!Array.isArray(arr[i])){
  		flat.push(arr[i])
  	} else 
  	{
  		for (var j = 0; j < arr[i].length; j++) {
  			flat.push(arr[i][j])
  		}
  	}

  }
  return flat
}
// with recursion
function flatten(arr) {
	var flat = []

	var fl=function(elem){
		if (Array.isArray(elem)) {
            
            for (var i = 0; i < elem.length; ++ i) {
                fl(elem[i]); 
            }
        } else {
            flat.push(elem); 
        }
    }

    fl(arr);
    return flat
	
}

// built in function
function flatten(arr){
	var flat = arr.flat();
	return flat
}