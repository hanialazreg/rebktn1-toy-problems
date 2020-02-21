/*
Edit Distance
Given two strings, find the minimum number of edits/operations required to convert 
the first string into the second string, given that the only operations can be insertion, 
deletion, or substitution.
Challenge: Do this in O(m x n) time, where m and n are the respective lengths of str1 and str2.



editDistance("cat", "cut") // 1

editDistance("wednesday", "sunday") // 5

editDistance("hackerrank", "hackreactor") // 6

For more information check out this article: https://en.wikipedia.org/wiki/Levenshtein_distance
*/

function editDistance(str1, str2) {

    // use two array evry one containe one string and looping on the array and compaire evry one so 
    // stop condition the two array are the same .
    // 
    var count = 0 ;
    if(str1.includes(str2)){
    	return 0;

    } else {

    var arr1 = str1.split('');
    var arr2 = str2.split('');
    if( arr1.length > arr2.length){
    	for (var i = 0; i < arr1.length; i++) {
    		if(arr2.includes(arr1[i])){
    			var index = arr2.indexOf(arr1[i]);
    			if(i !== index){
    				var temp = arr2[i];
    				arr2[i] = arr2[index] ;
    				arr2[index] = temp;
    				count ++ ;
    			}else
    		  	{

	    		arr2.push(arr1[i]);
	    		console.log(arr1)
	    		console.log(arr2)
	    	}
	    	else 
	    	{
	    		
	    	}
    	}
    	}

    }



	}



    return count ;
}