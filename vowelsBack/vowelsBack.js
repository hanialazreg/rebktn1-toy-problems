// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function PlayingWithString(string){
	var arr = string.split('');
	var newch ;
	var movedStr = "";
	for (var i = 0; i < string.length; i++) {
		newch = charMove(string[i]);
		if(newch === "c" || newch === "o" || newch === "d" || newch === "e"){
			newch = string[i];
		}
		movedStr = movedStr + newch ;
	}
	
	return movedStr;

}


// a function that moves characters 
function charMove(char){
	var newChar ;
	if(char === "i" || char === "u" || char === "y"){
		newChar = String.fromCharCode(char.charCodeAt(0) - 5) ;
		return newChar;
	}
	
	if(char === "c" || char === "o"){
		newChar = String.fromCharCode(char.charCodeAt(0) - 1) ;
		return newChar;
	}

	if(char === "d"){
		newChar = String.fromCharCode(char.charCodeAt(0) - 3) ;
		return newChar;
	}
	if(char === "e"){
		newChar = String.fromCharCode(char.charCodeAt(0) - 4) ;
		return newChar;
	}
	if(char === "a"){
		newChar = "v" ;
		return newChar;
	}
	if(char === "z"){
		return "e"
	}
	if((char.charCodeAt(0) - 122 ) < 10){
	return newChar = String.fromCharCode(97 + (char.charCodeAt(0) - 122 ));
	}

}