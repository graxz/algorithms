const { describe } = require("node:test");
const LinearSearch = require("../index");

describe('Linear Search', () => {

    // Tests that the search method returns the index of the first occurrence of a value that exists in the array. 
    it("test_search_for_existing_value", () => {
        const linearSearch = new LinearSearch([1, 2, 3, 4, 5]);
        expect(linearSearch.search(3)).toBe(2);
    });

    // Tests that the search method returns -1 when searching for a value that does not exist in the array. 
    it("test_search_for_non_existing_value", () => {
        const linearSearch = new LinearSearch([1, 2, 3, 4, 5]);
        expect(linearSearch.search(6)).toBe(-1);
    });

    // Tests that the search method returns -1 when searching an empty array. 
    it("test_search_empty_array", () => {
        const linearSearch = new LinearSearch([]);
        expect(linearSearch.search(1)).toBe(-1);
    });

    // Tests that the search method returns the index of the element when searching an array with only one element. 
    it("test_search_single_element_array", () => {
        const linearSearch = new LinearSearch([1]);
        expect(linearSearch.search(1)).toBe(0);
    });

    // Tests that the search method returns the index of the first occurrence of the value when searching an array with multiple occurrences of the value being searched for. 
    it("test_search_multiple_occurrences", () => {
        const linearSearch = new LinearSearch([1, 2, 3, 2, 4]);
        expect(linearSearch.search(2)).toBe(1);
    });

    // Tests that the search method returns -1 when passed a non-numeric value. 
    it("test_search_non_numeric_value", () => {
        const linearSearch = new LinearSearch([1, 2, 3]);
        expect(linearSearch.search("a")).toBe(-1);
    });
})
