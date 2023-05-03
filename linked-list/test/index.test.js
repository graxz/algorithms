const { describe } = require("node:test");
const LinkedList = require("../index");

describe('LinkedList', () => {
    it("Should that a value can be appended to an empty list", () => {
        const list = new LinkedList();
        list.append(1);
        expect(list.head.value).toBe(1);
    });

    it("Should that a value can be appended to a non-empty list", () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        expect(list.head.value).toBe(1);
        expect(list.head.next.value).toBe(2);
    });

    it("Should that the search method returns null when the value is not found in the list", () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        expect(list.search(3)).toBeNull();
    });
})