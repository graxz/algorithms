const { describe } = require("node:test");
const Stack = require("../index");

describe('Stacks', () => {
    
    // Tests that pushing and popping elements from the stack maintains the order and updates the size correctly. 
    it("test_push_and_pop", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.size()).toBe(0);
    });

    // Tests that size and isEmpty methods return the correct values after pushing and popping elements. 
    it("test_size_and_empty", () => {
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

    // Tests that popping from an empty stack returns an empty array. 
    it("test_pop_empty", () => {
        const stack = new Stack();
        expect(stack.pop()).toEqual([]);
    });

    // Tests that peeking at an empty stack returns undefined. 
    it("test_peek_empty", () => {
        const stack = new Stack();
        expect(stack.peek()).toBeUndefined();
    });

    // Tests that clear method sets the size to 0 and empties the stack. 
    it("test_clear", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.clear();
        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
    });
})