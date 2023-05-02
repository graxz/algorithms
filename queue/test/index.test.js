const { describe } = require("node:test");
const Queue = require("../index");

describe('Queues', () => {
    
    // Tests that enqueueing a single element adds it to the queue. 
    it("test_enqueue_single_element", () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
    });

    // Tests that enqueueing and dequeuing multiple elements works correctly. 
    it("test_enqueue_dequeue_multiple_elements", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
    });

    // Tests that dequeuing from an empty queue returns an empty array. 
    it("test_dequeue_empty_queue", () => {
        const queue = new Queue();
        expect(queue.dequeue()).toEqual([]);
    });

    // Tests that peeking at an empty queue returns undefined. 
    it("test_peek_empty_queue", () => {
        const queue = new Queue();
        expect(queue.peek()).toBeUndefined();
    });

    // Tests that enqueueing and dequeuing elements of different data types works correctly. 
    it("test_enqueue_different_data_types", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue("two");
        queue.enqueue(true);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe("two");
        expect(queue.dequeue()).toBe(true);
    });

    // Tests that clearing the queue resets its size to 0. 
    it("test_clear_queue", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.clear();
        expect(queue.size()).toBe(0);
    });

    // Tests that isEmpty returns true when the queue is empty.
    it("test_isEmpty_empty_queue", () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
    });
})