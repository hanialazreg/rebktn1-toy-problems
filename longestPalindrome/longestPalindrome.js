/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  
  let palmax = ""
  for (var i = 0; i < string.length; i++) {
  	for (var j = 0; i < string.length; j++) {
  		var slisedstr= string.slice(i,j)
  		if((slisedstr) === slisedstr.split().revese().join() && slisedstr.length > palmax){
  			palmax = slisedstr ;
  		}
  	}
  }
  return palmax ;
}

