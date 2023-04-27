const { describe } = require("node:test");
const LinkedList = require("../index");

describe('LinkedList', () => {

    
    // Tests that a value can be appended to an empty list. 
    it("test_append_empty_list", () => {
        const list = new LinkedList();
        list.append(1);
        expect(list.head.value).toBe(1);
    });

    // Tests that a value can be appended to a non-empty list. 
    it("test_append_non_empty_list", () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        expect(list.head.value).toBe(1);
        expect(list.head.next.value).toBe(2);
    });

    // Tests that the search method returns null when the value is not found in the list. 
    it("test_search_not_found", () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        expect(list.search(3)).toBeNull();
    });
})