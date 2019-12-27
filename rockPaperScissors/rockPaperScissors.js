/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function ( num) {
	let arr = [];
	var str = "";
	var nstr ="";
	let obj = { R:'R', P:'P', S:'S'};

	for (var i in obj) {
		str = concat(obj[i], num);
		arr.push(str);
	}
	for (var i = 0; i < arr.length; i++) {
		for (var j in obj) {
			nstr = arr[i].slice();
			nstr += obj[j];
			console.log(nstr);
		}
		arr.push(nstr);
		
	}
	return arr;	
	
};
 var concat= function(char, num){
 	var str = "";
 	for (var i = 0; i < num; i++) {
 		str+= char;
 	}
 	return str ;
 }