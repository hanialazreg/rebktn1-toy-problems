/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null

A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over.
This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes in any way
*/

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

// we will use tortoise and hare algorithm ,
// declare two pointer one is tortoise started at 0 and the second is hare started at 1 , while the second has next move
// the tortoise pointer by 1 and the hare pointer by two , if they meet so there is a cycle in the linked list.
 
var hasCycle = function(linkedList) {
	let tortoise = linkedList;
	let hare = linkedList;

	while( hare && hare.next){
		tortoise = hare.next;
		hare = hare.next.next ;
		if(tortoise === hare){
			return true ;
		}
	}
	return false ;
  
};

