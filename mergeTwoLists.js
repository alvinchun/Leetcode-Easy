var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let cur = dummy;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }

    cur.next = list1 || list2;

    return dummy.next;    
};

var mergeTwoLists = (l1, l2, d = new ListNode(), cur = d) => {
    while (l1 && l2) [cur.next, l1, l2, cur] = l1.val < l2.val ? [l1, l1.next, l2, l1] : [l2, l1, l2.next, l2];
    return (cur.next = l1 || l2, d.next);
};


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2; // Append remaining nodes

    return dummy.next; // Return merged list starting from dummy.next
};
