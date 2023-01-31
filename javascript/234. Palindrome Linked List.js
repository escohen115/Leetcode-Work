/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    

    let start = head
    let q = []
    while (start){
        q.push(start.val)
        start=start.next
    }

    return (q.join('') === q.reverse().join('') ) 
    


};
