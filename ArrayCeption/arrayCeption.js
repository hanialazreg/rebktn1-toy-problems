// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

function arrayception(array){
  let level = 0;
  function check(array, lev){
    for (let i=0; i<array.length; i++){
      if (Array.isArray(array[i]) && array[i].length > 0 ){
        check(array[i], lev+1);
      } else if (!Array.isArray(array[i])) {
        level = Math.max(level, lev+1)
        }
      } 
    }
    check(array, 0);
    return level;
}
