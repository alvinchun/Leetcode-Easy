var isPalindrome = function(head) {
    let slow = head, fast = head, prev, temp
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next
    prev = slow, slow = slow.next, prev.next = null
    while (slow)
        temp = slow.next, slow.next = prev, prev = slow, slow = temp
    fast = head, slow = prev
    while (slow)
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    return true
};

var isPalindrome = head => {
    let slow = head, fast = head, prev = null;
    while (fast?.next) slow = slow.next, fast = fast.next.next;
    while (slow) [slow.next, prev, slow] = [prev, slow, slow.next];
    while (prev) if (head.val !== prev.val) return false; else head = head.next, prev = prev.next;
    return true;
};

var isPalindrome = function(head) {
    let slow = head, fast = head;

    // Find the middle of the linked list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Compare first and second halves
    let left = head, right = prev;
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
};
