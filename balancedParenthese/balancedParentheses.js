/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
	
	var countOpen = 0 ;
	var countClose = 0;
	for (var i = 0; i < str.length; i++) {
		if(str[i] === "(" ){
			 countOpen++;
		}
		if(str[i] === ")" ){
		 countClose++;
		}
	}
	
	if(countOpen === countClose){
		return true ;
	}else {
		return false ;
	}


};
