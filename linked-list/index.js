class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
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

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current === null) {
                    return {
                        done: true
                    };
                }
                const value = current.value;
                current = current.next;
                return {
                    value,
                    done: false
                };
            }
        };
    }

    toString() {
        let current = this.head;
        let string = '';
        while (current !== null) {
            string += current.value + ' ';
            current = current.next;
        }
        return string.trim();
    }
}

module.exports = LinkedList;
