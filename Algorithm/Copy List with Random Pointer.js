var copyRandomList = function(head) {
    var node = head;
    while (node) {
        var temp = node.next;
        node.next = new RandomListNode(node.label);
        node.next.next = temp;
        node = temp;
    }
    node = head;
    while (node) {
        if (node.random) {
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }
    node = head;
    var dummy = new RandomListNode(0);
    var copy = dummy;
    
    while (node) {
        var next = node.next.next;
        copy.next = node.next;
        copy = copy.next;
        node.next = next;
        node = next;
    }
    return dummy.next;
};