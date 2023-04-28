class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = { value: value, next: null };

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }

        this.tail.next = this.head;
    }

    prepend(value) {
        const newNode = { value: value, next: this.head };

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        this.tail.next = this.head;
    }

    insert(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = { value: value, next: null };

        const leader = this.traverseToIndex(index - 1);

        const holdingPointer = leader.next;

        leader.next = newNode;

        newNode.next = holdingPointer;
    }

    traverseToIndex(index) {
        let counter = 0;

        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }


    remove(value) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.tail.next = this.head;
            return;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                return;
            }

            currentNode = currentNode.next;
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
            this.tail.next = this.head;
        }
    }

    search(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }

            if (currentNode.next === this.head) {
                return null;
            }

            currentNode = currentNode.next;
        }
    }
}

module.exports = CircularLinkedList;
