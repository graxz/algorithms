class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = {
            value,
            next: null,
            prev: null
        };

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    remove(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                current.next.prev = current;
                this.length--;
                return;
            }
            current = current.next;
        }
    }

    prepend(value) {
        const newNode = {
            value,
            next: this.head,
            prev: null
        };

        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    insert(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = {
            value,
            next: null,
            prev: null
        };

        let current = this.head;
        let previous = null;
        let i = 0;
        while (i < index) {
            previous = current;
            current = current.next;
            i++;
        }

        newNode.prev = previous;
        newNode.next = current;
        previous.next = newNode;
        current.prev = newNode;
        this.length++;
    }

    search(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

module.exports = DoublyLinkedList;
