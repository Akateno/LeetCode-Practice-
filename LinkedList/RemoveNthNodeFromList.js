// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]


//can we do this in one pass 

//dummy node starts before the head node 
//current=/head 
//tail node we moved two down  
//were moving three points, there are five numbers we moved the tail twice to the right, and will go until the tail is null and remove node lands on 3
//whihc is the 2nd from the right, 

//why do we need to keep track of 3 trackers? The tail is to set n=tail, and as it moves down \
//adding or deleting linked lists we can use this dummy method 

var removeNthFromEnd = function(head, n) {
    
 let dummyHead= new ListNode(-1) //setting dummmyNode
 dummyHead.next=head;           // setting reference dummyHead to head which is true after dummyhead, head is next 
 let resultHead=dummyHead 
 let count =0; 
 let tail = head; 

 while(count< n){
    count++
    tail = tail.next    //setting tail equal to n  
 }

 let removedNode=head; 
 let prev = dummyHead; 

 while(tail){
    tail=tail.next
    removedNode=removedNode.next; 
    prev=prev.next
 }
  prev.next= removedNode.next 

  return resultHead.next; 

};