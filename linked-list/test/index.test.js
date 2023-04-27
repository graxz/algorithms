const { describe } = require("node:test");
const LinkedList = require("../index");

describe('LinkedList', () => {

    // Tests that adding a single element to the list works correctly. 
    it("test_add_single_element", () => {
        const list = new LinkedList();
        list.add(1);
        expect(list.toString()).toBe("1");
    });

    // Tests that adding multiple elements to the list works correctly. 
    it("test_add_multiple_elements", () => {
        const list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.toString()).toBe("1 2 3");
    });

    // Tests that removing the head element from the list works correctly. 
    it("test_remove_head_element", () => {
        const list = new LinkedList();
        list.add(1);
        list.add(2);
        list.remove(1);
        expect(list.toString()).toBe("2");
    });

    // Tests that checking if a null value is in the list works correctly. 
    it("test_contains_null_value", () => {
        const list = new LinkedList();
        list.add(null);
        expect(list.contains(null)).toBe(true);
    });

    // Tests that adding duplicate elements to the list works correctly. 
    it("test_add_duplicate_elements", () => {
        const list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(1);
        expect(list.toString()).toBe("1 2 1");
    });

    // Tests that converting an empty list to a string works correctly. 
    it("test_to_string_empty_list", () => {
        const list = new LinkedList();
        expect(list.toString()).toBe("");
    });
})