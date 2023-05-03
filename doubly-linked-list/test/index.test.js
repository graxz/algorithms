const { describe } = require("node:test");
const DoublyLinkedList = require("../index");

describe('Doubly Linked List', () => {
    it("Should append method adds a node to an empty list", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(1);
        expect(list.length).toBe(1);
    });

    it("Should append method adds a node to a non-empty list", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(2);
        expect(list.length).toBe(2);
    });

    it("Should remove method removes the head node", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.remove(1);
        expect(list.head.value).toBe(2);
        expect(list.tail.value).toBe(2);
        expect(list.length).toBe(1);
    });

    it("Should remove method removes a non-head node", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.remove(2);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(3);
        expect(list.length).toBe(2);
    });

    it("Should remove method when while loop and if statement are not executed", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.remove(3);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(2);
        expect(list.length).toBe(2);
    });

    it("Should insert method inserts a node at a non-zero index", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(3);
        list.insert(2, 1);
        expect(list.head.value).toBe(1);
        expect(list.head.next.value).toBe(2);
        expect(list.head.next.next.value).toBe(3);
        expect(list.length).toBe(3);
    });

    it("Should search method returns null if value not found", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        expect(list.search(3)).toBeNull();
    });

    it("Should insert method if index is equal to 0", () => {
        const list = new DoublyLinkedList();
        list.append(2);
        list.insert(1, 0);
        expect(list.head.value).toBe(1);
        expect(list.head.next.value).toBe(2);
        expect(list.length).toBe(2);
    });

    it("Should search method returns the node if value is found", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        expect(list.search(2).value).toBe(2);
    });
})