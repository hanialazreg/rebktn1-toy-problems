/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var commonCharacters = function(string1, string2) {
  // i will go throw the first string and for each caracter i will test if existe 
  // in the second string , if yes put it in a new string, then delete all repeated characters.
  var str = "";
  for (var i = 0; i < string1.length; i++) {
  	 	
  		if(find(string1[i],string2)){
  			str = str + string1[i];
  		}
  	}
// str contain all exist character from string1 in string2 even they are repeated
// we should delete repeated characters.
var newstr = "";
for (var i = 0; i < str.length; i++) {
	for (var j = 1; i < str.length; j++) {
		if( str[i] === str[j]){
			newstr = str.substring(i,i+1);
		}
	}
	str[i]
}




  	return newstr;
  
};

function find(char, string){
	var fnd = false;
	for (var i = 0; i < string.length; i++) {
		if(char === string[i]){
			return true;
		}
		return false;		
	}
}
