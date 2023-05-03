const { describe } = require("node:test");
const BinarySearch = require("../index");

describe('binary-search', () => {
    it("Should returns the correct index for an existing value in the array", () => {
        const binarySearch = new BinarySearch([1, 2, 3, 4, 5]);
        expect(binarySearch.search(3)).toBe(2);
    });

    it("Should returns the correct index for the first value in the array", () => {
        const binarySearch = new BinarySearch([1, 2, 3, 4, 5]);
        expect(binarySearch.search(1)).toBe(0);
    });

    it("Should returns -1 when searching for a value in an empty array", () => {
        const binarySearch = new BinarySearch([]);
        expect(binarySearch.search(1)).toBe(-1);
    });

    it("Should returns the correct index when searching for a value in an array with only one element", () => {
        const binarySearch = new BinarySearch([5]);
        expect(binarySearch.search(5)).toBe(0);
    });

    it("Should returns -1 when searching for a value that is not in the array", () => {
        const binarySearch = new BinarySearch([1, 2, 3, 4, 5]);
        expect(binarySearch.search(6)).toBe(-1);
    });

    it("Should returns the correct index for the last value in the array", () => {
        const binarySearch = new BinarySearch([1, 2, 3, 4, 5]);
        expect(binarySearch.search(5)).toBe(4);
    });
})
