const { describe } = require("node:test");
const BinarySearch = require("../index");

describe('binary-search', () => {
    
    // Tests that the search method returns the correct index for an existing value in the array. 
    it("test_search_existing_value", () => {
        const binarySearch = new BinarySearch([1, 2, 3, 4, 5]);
        expect(binarySearch.search(3)).toBe(2);
    });

    // Tests that the search method returns the correct index for the first value in the array. 
    it("test_search_first_value", () => {
        const binarySearch = new BinarySearch([1, 2, 3, 4, 5]);
        expect(binarySearch.search(1)).toBe(0);
    });

    // Tests that the search method returns -1 when searching for a value in an empty array. 
    it("test_search_empty_array", () => {
        const binarySearch = new BinarySearch([]);
        expect(binarySearch.search(1)).toBe(-1);
    });

    // Tests that the search method returns the correct index when searching for a value in an array with only one element. 
    it("test_search_single_element_array", () => {
        const binarySearch = new BinarySearch([5]);
        expect(binarySearch.search(5)).toBe(0);
    });

    // Tests that the search method returns -1 when searching for a value that is not in the array. 
    it("test_search_non_existing_value", () => {
        const binarySearch = new BinarySearch([1, 2, 3, 4, 5]);
        expect(binarySearch.search(6)).toBe(-1);
    });

    // Tests that the search method returns the correct index for the last value in the array. 
    it("test_search_last_value", () => {
        const binarySearch = new BinarySearch([1, 2, 3, 4, 5]);
        expect(binarySearch.search(5)).toBe(4);
    });
})
