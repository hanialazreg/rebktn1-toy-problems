/*
You are given an array of numbers that each represent the height of an adjoining building. During torrential rain, water collects in the spaces between buildings. What is the maximum amount of water collected by the buildings represented by the array?

Explanation: An input of [3,0,3] can be visualized as such:

 __    __
|  |//|  |
|  |//|  |
|  |//|  |
‾‾‾‾‾‾‾‾‾‾
The area of water in the above picture (and the result of calling volume([3,0,3])) is 3.

Challenge: do this in O(n) with < 2 pass-throughs

volume([ 3, 0, 3 ]) // 3
volume([ 1, 2, 3, 4, 0, 5, 3, 1 ]) // 4
volume([1,2,3,2,1]) // 0

*/

function volume(heights) {
  // try to find 0 and get the the min value of the two number between 0
  var index = heights.indexOf(0);
  console.log(index)
  function min(a, b){
  	return (a>b ? b : a)
  }
  if(index > 0){
  return min(heights[index-1], heights[index+1])
  } else 
  
  return 0 
}
