// Given a number n (represented as a binary number string), convert n to base 10. Do NOT use parseInt(n, 2).
// You may use the parseInt function that takes in just one argument.

// Examples
// Input	Output
// n: "0"	 0
// n: "1"	 1
// n:"10"	 2
// n:"11"	 3
// n:"100"	 4
// n:"101"	 5
// n:"110"	 6
// n:"111"	 7
// n:"1000"	 8
var objB = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

function binaryToDecimal(n) {
  var res = 0;
  for (var i = 0; i < n.length; i++) {
    res += 2 ** (n.length - i - 1) * n[i];
  }
  return res;
}

const binaryToDecimalRec = (n, res = 0) =>
  n.length
    ? binaryToDecimalRec(n.slice(1), res + 2 ** (n.length - 1) * n[0])
    : res;
