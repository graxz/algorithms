const { describe } = require("node:test");
const Queue = require("../index");

describe('Queues', () => {
    it("Should that enqueueing a single element adds it to the queue", () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
    });

    it("Should that enqueueing and dequeuing multiple elements works correctly", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
    });

    it("Should that dequeuing from an empty queue returns an empty array", () => {
        const queue = new Queue();
        expect(queue.dequeue()).toEqual([]);
    });

    it("Should that peeking at an empty queue returns undefined", () => {
        const queue = new Queue();
        expect(queue.peek()).toBeUndefined();
    });

    it("Should that enqueueing and dequeuing elements of different data types works correctly", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue("two");
        queue.enqueue(true);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe("two");
        expect(queue.dequeue()).toBe(true);
    });

    it("Should that clearing the queue resets its size to 0", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.clear();
        expect(queue.size()).toBe(0);
    });

    it("Should that isEmpty returns true when the queue is empty", () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
    });
})