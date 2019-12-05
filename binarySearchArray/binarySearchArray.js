/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
	// i will divid the array into two part and compaire the target with middel
	// if < then we will work in the first part of the array else will work on the second part 
	// and do the same work
	// the best way is to work with recursion here but i start with the simple way
	// and i will refactor after that 

	var middel = Math.floor(array.length/2);

			var find;
			if(target > array[middel]){
				for (var i = middel; i < array.length; i++) {
					if(array[i] === target){
						find= array.indexOf(array[i]);
						return find;
					}
					find = null;
				}
				return find ;
			}
			else if(target < array[middel]){
				for (var i = 0; i < middel; i++) {
					if (array[i] === target) {
						find = array.indexOf(array[i])
						return find;
					}
					find = null;
				}
				return find;
			}	
};


// refactoring

functionfindRec(array,target){
	var middel = Math.floor(array.length/2);
	if(target === array[middel]){

		console.log(middel)
	}
	else 
		if(target > middel){
			array = array.slice(middel,array.length);

		functionfindRec(array,target);

		}
	else if(target < middel){
		array = array.slice(0, middel)

		functionfindRec(array ,target);

	}

}