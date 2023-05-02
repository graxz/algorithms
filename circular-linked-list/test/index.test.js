const { describe } = require("node:test");
const CircularLinkedList = require("../index");

describe('Circular Linked List', () => {
    
    
    // Tests that append method adds a new node to the end of the list with valid input. 
    it("test_append_valid_input", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        expect(cll.head.value).toBe(1);
        expect(cll.tail.value).toBe(2);
        expect(cll.tail.next).toBe(cll.head);
    });

    // Tests that prepend method adds a new node to the beginning of an empty list. 
    it("test_prepend_empty_list", () => {
        const cll = new CircularLinkedList();
        cll.prepend(1);
        expect(cll.head.value).toBe(1);
        expect(cll.tail.value).toBe(1);
        expect(cll.tail.next).toBe(cll.head);
    });

    // Tests that insert method adds a new node to the beginning of the list when index is 0. 
    it("test_insert_index_0", () => {
        const cll = new CircularLinkedList();
        cll.insert(1, 0);
        expect(cll.head.value).toBe(1);
        expect(cll.tail.value).toBe(1);
        expect(cll.tail.next).toBe(cll.head);
    });

    // Tests that remove method removes the head node correctly. 
    it("test_remove_head_node", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.remove(1);
        expect(cll.head.value).toBe(2);
        expect(cll.tail.value).toBe(2);
        expect(cll.tail.next).toBe(cll.head);
    });

    // Tests that search method returns null when searching for a non-existent value. 
    it("test_search_non_existent_value", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        expect(cll.search(3)).toBe(null);
    });

    // Tests inserts a value at a specific index. 
    it("test_insert", () => {
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

    // Tests removes a value from the list. 
    it("test_remove", () => {
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

    // Tests that tail.next points to head. 
    it("test_circular_behavior", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        expect(cll.tail.next).toBe(cll.head);
    });

    // Tests searches for a value in the list. 
    it("test_search", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        expect(cll.search(2).value).toBe(2);
        expect(cll.search(4)).toBe(null);
    });

    // Tests that the remove method correctly handles removing a value from an empty list. 
    it("test_remove_from_empty_list", () => {
        const cll = new CircularLinkedList();
        cll.remove(1);
        expect(cll.head).toBeNull();
        expect(cll.tail).toBeNull();
    });

    // Tests that the traverseToIndex method correctly traverses the list.
    it("test_traverse_to_index", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        expect(cll.traverseToIndex(1).value).toBe(2);
    });

    // Tests that the search method correctly handles searching an empty list.
    it("test_search_empty_list", () => {
        const cll = new CircularLinkedList();
        expect(cll.search(1)).toBe(null);
    });

    // Tests that the remove method correctly handles reassigning the tail when removing the last node.
    it("test_remove_tail_node", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.remove(2);
        expect(cll.tail.value).toBe(1);
        expect(cll.tail.next).toBe(cll.head);
    });

    // Tests that the remove method correctly handles reassigning the next property of the previous node when removing a node.
    it("test_remove_reassign_next_property", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        cll.remove(2);
        expect(cll.head.next.value).toBe(3);
    });

    // Tests that the remove method correctly handles reassigning the next property of the previous node when removing the tail node.
    it("test_remove_tail_reassign_next_property", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        cll.remove(3);
        
        expect(cll.head.next.value).toBe(2);
    });

    // Tests that the remove method correctly handles reassigning the next property of the previous node when removing the head node.
    it("test_remove_head_reassign_next_property", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        cll.remove(1);
        expect(cll.head.next.value).toBe(3);
    });

    // Tests that the remove method correctly handles assigning the head with the next node when removing the head node.
    it("test_remove_head_reassign_head", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.append(3);
        cll.remove(1);
        expect(cll.head.value).toBe(2);
    });

    // Tests that the prepend method correctly handles when reassigning the tail next property with the new head.
    it("test_prepend_reassign_tail_next_property", () => {
        const cll = new CircularLinkedList();
        cll.append(1);
        cll.append(2);
        cll.prepend(3);
        expect(cll.tail.next.value).toBe(3);
    });
})