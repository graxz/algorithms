class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = {
            value,
            next: null
        };

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    prepend(value) {
        const newNode = {
            value,
            next: this.head
        };

        this.head = newNode;
    }

    insert(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = {
            value,
            next: null
        };

        let current = this.head;
        let previous = null;
        let i = 0;

        while (i < index) {
            previous = current;
            current = current.next;
            i++;
        }

        newNode.next = current;
        previous.next = newNode;
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

module.exports = LinkedList;
