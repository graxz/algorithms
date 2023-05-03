const { describe } = require("node:test");
const JumpSearch = require("../index");

describe('Jump Search', () => {
    it('Should return -1 if the element is not present in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const x = 6;
        const jumpSearch = new JumpSearch(arr, x);
        expect(jumpSearch.search()).toBe(-1);
    });

    it('Should return the index of the element if the element is present in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const x = 4;
        const jumpSearch = new JumpSearch(arr, x);
        expect(jumpSearch.search()).toBe(3);
    });

    it("Should returns -1 when the searched element is not present in the array", () => {
        const arr = [1, 3, 5, 7, 9];
        const x = 6;
        const jumpSearch = new JumpSearch(arr, x);
        expect(jumpSearch.search()).toBe(-1);
    });

    it("Should returns -1 when the array is empty", () => {
        const arr = [];
        const x = 5;
        const jumpSearch = new JumpSearch(arr, x);
        expect(jumpSearch.search()).toBe(-1);
    });

    it("Should returns -1 when the searched number is less than all of array", () => {
        const arr = [1, 3, 5, 7, 9];
        const x = -1;
        const jumpSearch = new JumpSearch(arr, x);
        expect(jumpSearch.search()).toEqual(-1);
    });

    it("Should returns -1 when the searched number is greater than all of array", () => {
        const arr = [1, 3, 5, 7, 9];
        const x = 10;
        const jumpSearch = new JumpSearch(arr, x);
        expect(jumpSearch.search()).toEqual(-1);
    });

    if("Should returns -1 when prev is equal to a Math.min(step, n)", () => {
        const arr = [1, 3, 5, 7, 9];
        const x = 6;
        const jumpSearch = new JumpSearch(arr, x);
        expect(jumpSearch.search()).toEqual(-1);
    });
})