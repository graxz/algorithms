const { describe } = require("node:test");
const CircularLinkedList = require("../index");

describe('Circular Linked List', () => {
    it("Should adds a new node to the end of the list with valid input", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        expect(cll.head.value).toBe(1);
        expect(cll.tail.value).toBe(2);
        expect(cll.tail.next).toBe(cll.head);
    });

    it("Should adds a new node to the beginning of an empty list", () => {
        const cll = new CircularLinkedList();
        cll.prepend(1);
        expect(cll.head.value).toBe(1);
        expect(cll.tail.value).toBe(1);
        expect(cll.tail.next).toBe(cll.head);
    });

    it("Should adds a new node to the beginning of the list when index is 0", () => {
        const cll = new CircularLinkedList();
        cll.insert(1, 0);
        expect(cll.head.value).toBe(1);
        expect(cll.tail.value).toBe(1);
        expect(cll.tail.next).toBe(cll.head);
    });

    it("Should remove method removes the head node correctly", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.remove(1);
        expect(cll.head.value).toBe(2);
        expect(cll.tail.value).toBe(2);
        expect(cll.tail.next).toBe(cll.head);
    });

    it("Should returns null when searching for a non-existent value", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        expect(cll.search(3)).toBe(null);
    });

    it("Should inserts a value at a specific index", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.insert(3, 1);
        expect(cll.head.value).toBe(1);
        expect(cll.head.next.value).toBe(3);
        expect(cll.head.next.next.value).toBe(2);
        expect(cll.tail.value).toBe(2);
        expect(cll.tail.next).toBe(cll.head);
    });

    it("Should removes a value from the list", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        cll.remove(2);
        expect(cll.head.value).toBe(1);
        expect(cll.head.next.value).toBe(3);
        expect(cll.tail.value).toBe(3);
        expect(cll.tail.next).toBe(cll.head);
    });

    it("Should tail.next points to head", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        expect(cll.tail.next).toBe(cll.head);
    });

    it("Should searches for a value in the list", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        expect(cll.search(2).value).toBe(2);
        expect(cll.search(4)).toBe(null);
    });

    it("Should remove method correctly handles removing a value from an empty list", () => {
        const cll = new CircularLinkedList();
        cll.remove(1);
        expect(cll.head).toBeNull();
        expect(cll.tail).toBeNull();
    });

    it("Should traverseToIndex method correctly traverses the list", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        expect(cll.traverseToIndex(1).value).toBe(2);
    });

    it("Should search method correctly handles searching an empty list", () => {
        const cll = new CircularLinkedList();
        expect(cll.search(1)).toBe(null);
    });

    it("Should remove method correctly handles reassigning the tail when removing the last node", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.remove(2);
        expect(cll.tail.value).toBe(1);
        expect(cll.tail.next).toBe(cll.head);
    });

    it("Should remove method correctly handles reassigning the next property of the previous node when removing a node", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        cll.remove(2);
        expect(cll.head.next.value).toBe(3);
    });

    it("Should remove method correctly handles reassigning the next property of the previous node when removing the tail node", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        cll.remove(3);
        
        expect(cll.head.next.value).toBe(2);
    });

    it("Should remove method correctly handles reassigning the next property of the previous node when removing the head node", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        cll.remove(1);
        expect(cll.head.next.value).toBe(3);
    });

    it("Should remove method correctly handles assigning the head with the next node when removing the head node", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        cll.remove(1);
        expect(cll.head.value).toBe(2);
    });

    it("Should prepend method correctly handles when reassigning the tail next property with the new head", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.prepend(3);
        expect(cll.tail.next.value).toBe(3);
    });
})