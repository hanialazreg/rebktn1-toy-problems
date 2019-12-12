/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
	
	var count = 0;
	var appkey = Object.keys(apple);
	var orgkey = Object.keys(orange);
	for (var i = 0; i < appkey.length; i++) {
		console.log(apple[appkey[i]])
		console.log(orange[appkey[i]])
		if(apple[appkey[i]] !== orange[orgkey[i]]){
			
			count++;
		}	
	}
	if(count>0){
		return false ;
	} 
	return true;
}





var deepEquals = function(apple, orange) {
	if(JSON.stringify(apple) === JSON.stringify(orange)){
		return true;

	}
	return false ;
};
