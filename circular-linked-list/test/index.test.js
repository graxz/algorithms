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
})