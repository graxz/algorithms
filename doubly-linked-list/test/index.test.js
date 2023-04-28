const { describe } = require("node:test");
const DoublyLinkedList = require("../index");

describe('Doubly Linked List', () => {
    
    // Tests that the append method adds a node to an empty list. 
    it("test_append_empty_list", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(1);
        expect(list.length).toBe(1);
    });

    // Tests that the append method adds a node to a non-empty list. 
    it("test_append_non_empty_list", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(2);
        expect(list.length).toBe(2);
    });

    // Tests that the remove method removes the head node. 
    it("test_remove_head_node", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.remove(1);
        expect(list.head.value).toBe(2);
        expect(list.tail.value).toBe(2);
        expect(list.length).toBe(1);
    });

    // Tests that the remove method removes a non-head node. 
    it("test_remove_non_head_node", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.remove(2);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(3);
        expect(list.length).toBe(2);
    });

    // Tests that the insert method inserts a node at a non-zero index. 
    it("test_insert_non_zero_index", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(3);
        list.insert(2, 1);
        expect(list.head.value).toBe(1);
        expect(list.head.next.value).toBe(2);
        expect(list.head.next.next.value).toBe(3);
        expect(list.length).toBe(3);
    });

    // Tests that the search method returns null if value not found. 
    it("test_search_not_found", () => {
        const list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        expect(list.search(3)).toBeNull();
    });
})