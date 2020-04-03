/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

function allAnagrams(string) {
  var results = [];

  // function adds letters to an anagram from avaialableLetters
  var oneArg = function (anagram, availableLetters) {
    //Base Case
    //check if anagram is complete by comparing its length w/ inputString
    if (anagram.length === string.length) {
      results.push(anagram);
      console.log("first", results);
    }
    //Edge Case
    else {
      //There is still some space to input availableLetters
      for (var i = 0; i < availableLetters.length; i++) {
        //call the recursive function on a new anagram string with a letter
        //added and a new availableLetters string with that same letter removed
        oneArg(
          anagram + availableLetters[i],
          availableLetters.slice(0, i).concat(availableLetters.slice(i + 1))
        );
      }
    }
  };

  //call the recursive function to start it. (actual callsite)
  oneArg("", string);

  console.log("last", results);
  //return results array of allAnagrams
  return results;
}

allAnagrams("abc");
