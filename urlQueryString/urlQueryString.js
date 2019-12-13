/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	//var decode = encodeURI(url);
	var decode = decodeURIComponent(url);
	
	var arr = [];
	var sarr =[];

	for (var i = 0; i < decode.length; i++) {
			if(decode[i] === "="){
			sarr.push(decode[i-1]);
			}
		
	}
	
	var regexp = new RegExp(decode,'&');
	var arr = regexp.exec(decode);

}
