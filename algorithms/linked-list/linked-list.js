// Line 2 functions ins called IFFE (Servers as name space or lexical scoping)
(function(){
    function SinglyNode(value, next) {
        this.value = value;
        this.next = next;
    }

    function LinkedList() {
        this.head = null;
        this.tail = null;
    }

    function DoublyNode(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

    LinkedList.prototype.addToHead = function(value) {
        const newNode = new DoublyNode(value, this.head, null);
        if (this.head) this.head.prev = newNode;
        else this.tail = newNode; 
        this.head = newNode;
    };

    const list = new LinkedList();
    list.addToHead(100);
    list.addToHead(200);
    console.log(list);

})()