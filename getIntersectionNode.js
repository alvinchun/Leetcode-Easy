var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};

var getIntersectionNode = (a, b) => {
    while (a !== b) a = a ? a.next : b, b = b ? b.next : a;
    return a;
};

var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB;
    
    while (a !== b) {
        a = a ? a.next : headB; // Switch to headB when reaching end of list A
        b = b ? b.next : headA; // Switch to headA when reaching end of list B
    }

    return a; // Returns the intersection node or null if no intersection exists
};
