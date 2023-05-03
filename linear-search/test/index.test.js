const { describe } = require("node:test");
const LinearSearch = require("../index");

describe('Linear Search', () => {
    it("Should the search method returns the index of the first occurrence of a value that exists in the array", () => {
        const linearSearch = new LinearSearch([1, 2, 3, 4, 5]);
        expect(linearSearch.search(3)).toBe(2);
    });

    it("Should the search method returns -1 when searching for a value that does not exist in the array", () => {
        const linearSearch = new LinearSearch([1, 2, 3, 4, 5]);
        expect(linearSearch.search(6)).toBe(-1);
    });

    it("Should the search method returns -1 when searching an empty array", () => {
        const linearSearch = new LinearSearch([]);
        expect(linearSearch.search(1)).toBe(-1);
    });

    it("Should the search method returns the index of the element when searching an array with only one element", () => {
        const linearSearch = new LinearSearch([1]);
        expect(linearSearch.search(1)).toBe(0);
    });

    it("Should the search method returns the index of the first occurrence of the value when searching an array with multiple occurrences of the value being searched for", () => {
        const linearSearch = new LinearSearch([1, 2, 3, 2, 4]);
        expect(linearSearch.search(2)).toBe(1);
    });

    it("Should the search method returns -1 when passed a non-numeric value", () => {
        const linearSearch = new LinearSearch([1, 2, 3]);
        expect(linearSearch.search("a")).toBe(-1);
    });
})
