/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
	var str = time.slice(time.length-2 , time.length)
	console.log(str)
	if(str === "am"){
		return time ;
	} else 
	for (var i = 0; i < time.indexOf(":"); i++) {
		var fstr = "";
		fstr+= time[i]
	}
	var pmtime = parseInt(fstr, 10);
	pmtime += 12;
	var newtime = time.replace(fstr, pmtime);
	return newtime.substr(0, newtime.length-2)
  }
