class Solution {
    reverseList(head) {
        // Initialize pointers
        let prev = null; // Previous node starts as null
        let curr = head; // Current node starts at the head

        // Traverse the list
        while (curr !== null) {
            let next = curr.next; // Save the next node
            
            curr.next = prev; // Reverse the link
            
            // Move pointers forward
            prev = curr; // Move prev to the current node
            curr = next; // Move curr to the next node
        }

        // prev is now the new head of the reversed list
        return prev;
    }
}

class Solution {
    reverseList = (head, prev = null) => head ? this.reverseList(head.next, (head.next = prev, head)) : prev;
}
