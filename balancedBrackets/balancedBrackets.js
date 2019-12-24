/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
	return(isBalancedparenthesis(str) && isBalancedbrackets(str) && isBalancedCurlyBracket(str) )
};
var isBalancedparenthesis = function(str) {
	var arr = [];
	for (var i = 0; i < str.length; i++) {
		if(str[i] === "("){
			arr.push(str[i]);
		}
		if(str[i] === ")"){
			arr.pop();
		}
	}
	return (arr.length === 0);
};
var isBalancedbrackets = function(str) {
	var arr = [];
	for (var i = 0; i < str.length; i++) {
		if(str[i] === "["){
			arr.push(str[i]);
		}
		if(str[i] === "]"){
			arr.pop();
		}
	}
	return (arr.length === 0);
};

var isBalancedCurlyBracket = function(str) {
var arr = [];
	for (var i = 0; i < str.length; i++) {
		if(str[i] === "{"){
			arr.push(str[i]);
		}
		if(str[i] === "}"){
			arr.pop();
		}
	}
	return (arr.length === 0);
};

