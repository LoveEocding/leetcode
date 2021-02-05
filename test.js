var reverseKGroup = function (head, k) {
    var copyhead = head;
    var i = 1;
    while (i < k && copyhead && copyhead.next) {
        copyhead = copyhead.next;
        i++;
    }
    if (i < k || k === 1) {
        return head;
    }
    var before = null;
    var now = head;
    while (i--) {
        var c = now.next;
        now.next = before;
        before = now;
        now = c;
    }
    head.next = reverseKGroup(now, k);
    return before;
}


var data = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
}

console.log(JSON.stringify(reverseKGroup(data, 2)));