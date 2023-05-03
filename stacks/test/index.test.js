const { describe } = require("node:test");
const Stack = require("../index");

describe('Stacks', () => {
    it("Should that pushing and popping elements from the stack maintains the order and updates the size correctly", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.size()).toBe(0);
    });

    it("Should that size and isEmpty methods return the correct values after pushing and popping elements", () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        stack.push(2);
        expect(stack.size()).toBe(2);
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        expect(stack.size()).toBe(1);
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
    });

    it("Should that popping from an empty stack returns an empty array", () => {
        const stack = new Stack();
        expect(stack.pop()).toEqual([]);
    });

    it("Should that peeking at an empty stack returns undefined", () => {
        const stack = new Stack();
        expect(stack.peek()).toBeUndefined();
    });

    it("Should that clear method sets the size to 0 and empties the stack", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.clear();
        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
    });
})