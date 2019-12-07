/*

In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

You must check within string (s) to fid all of the mating pairs, and return a string containing only them. Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

x will always be a positive integer, and s will never be empty

- regular expression is not allow 
B8 8 8B B

// */  

function mattingPair(num, string){
	var state = false ;
	var count = 0;
	var str = "";
	var arr = [];
	for (var i = 0; i < string.length; i++) {
		if(string[i] === "B" && string[i+1] === "8"){
			str+= string[i]+ string[i+1];
			count ++ ;
		}
		else
			if(string[i] === "8" && string[i+1] === "B"){
				str+= string[i]+ string[i+1];	
				count ++ ;
			}
	
	}
	if(count > num -1){
		state = true ;
	}
	arr.push(str);
	arr.push(state);
	return arr ;

}

// testing regular expression for the first time 
function mattingPair(num, string){
	var regexp = new RegExp('B8',g)
	var regexp1 = new RegExp('8B',g)
	return (s) =>(/regexp/,/regexp1/ function(){
		// traitmenttttt 
	})
}
