/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result.insert = function(key,value) {
  	size ++;
  	var index = getIndexBelowMaxForKey(key,storageLimit);
  	var bucket = storage[index];
  	if(bucket){ //exist so update
  		for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
        }
      }
      // not exist
      bucket.push([key, value]);
    } else {
      // no bucket at the storage location
      storage[index] = [];
      storage[index].push([key, value]);
    }
    // resizing not yet
    
  };

  result.retrieve = function(key) {

  	 var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        
        if (bucket[i][0] === key) {
          // We have found the value in the bucket
          return bucket[i][1];
        }
      }
    }
    // not found
    return undefined;
      };

  result.remove = function(key) {
   // TODO: implement `remove`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          // Found the value so decrease size by 1
          size--;
          bucket.splice(i, 1);
        }
      }
    }
    // resize not yet
  };

  return result;
};
