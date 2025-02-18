const hasCycle = (head) => {
    let fast = head;
    while (fast && fast.next) {
      head = head.next;
      fast = fast.next.next;
      if (head === fast) return true;
    }
    return false;
  };

  const hasCycle = head => {
    let fast = head;
    while (fast?.next) {
        head = head.next;
        fast = fast.next.next;
        if (head === fast) return true;
    }
    return false;
};

const hasCycle = function(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next; // Move slow pointer one step
        fast = fast.next.next; // Move fast pointer two steps
        
        if (slow === fast) return true; // Cycle detected
    }

    return false; // No cycle found
};
