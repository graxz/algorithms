const { describe } = require("node:test");
const TernarySearch = require("../index");

describe("Ternary Search", () => {
    it("Should returns the index of the first occurrence of the value in the array.", () => {
        const array = [1, 2, 3, 4, 5, 6];
        const ternarySearch = new TernarySearch(array);
        const result = ternarySearch.search(4);
        expect(result).toBe(3);
    });

    it("Should returns -1 when searching an empty array.", () => {
        const array = [];
        const ternarySearch = new TernarySearch(array);
        const result = ternarySearch.search(4);
        expect(result).toBe(-1);
    });

    it("Should works correctly with large arrays.", () => {
        const array = Array.from({ length: 100000 }, (_, i) => i + 1);
        const ternarySearch = new TernarySearch(array);
        const result = ternarySearch.search(50000);
        expect(result).toBe(49999);
    });

    it("Should returns -1 if the value is not found in the array.", () => {
        const array = [1, 2, 3, 4, 5, 6];
        const ternarySearch = new TernarySearch(array);
        const result = ternarySearch.search(7);
        expect(result).toBe(-1);
    });

    it("Should returns the index of the first occurrence of the value in an array with only one element.", () => {
        const array = [4];
        const ternarySearch = new TernarySearch(array);
        const result = ternarySearch.search(4);
        expect(result).toBe(0);
    });
});