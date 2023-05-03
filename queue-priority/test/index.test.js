const { describe } = require("node:test");
const QueuePriority = require("../index");

describe('Priority Queues', () => {
    it("Should that enqueueing elements with different priorities adds them to the queue in the correct order", () => {
        const queue = new QueuePriority();
        queue.enqueue("task1", 2);
        queue.enqueue("task2", 1);
        queue.enqueue("task3", 3);
        expect(queue.peek().element).toBe("task2");
    });

    it("Should that dequeueing elements returns them in the correct order based on their priority", () => {
        const queue = new QueuePriority();
        queue.enqueue("task1", 2);
        queue.enqueue("task2", 1);
        queue.enqueue("task3", 3);
        expect(queue.dequeue().element).toBe("task2");
        expect(queue.dequeue().element).toBe("task1");
        expect(queue.dequeue().element).toBe("task3");
    });

    it("Should that dequeueing from an empty queue returns an empty array", () => {
        const queue = new QueuePriority();
        expect(queue.dequeue()).toEqual([]);
    });

    it("Should that enqueueing an element with the same priority adds it to the end of the queue", () => {
        const queue = new QueuePriority();
        queue.enqueue("task1", 2);
        queue.enqueue("task2", 1);
        queue.enqueue("task3", 2);
        expect(queue.peek().element).toBe("task2");
        expect(queue.size()).toBe(3);
    });

    it("Should that the size and isEmpty methods return the correct values after enqueueing and dequeueing elements", () => {
        const queue = new QueuePriority();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue("task1", 2);
        queue.enqueue("task2", 1);
        expect(queue.size()).toBe(2);
        expect(queue.isEmpty()).toBe(false);
        queue.dequeue();
        expect(queue.size()).toBe(1);
        expect(queue.isEmpty()).toBe(false);
        queue.clear();
        expect(queue.size()).toBe(0);
        expect(queue.isEmpty()).toBe(true);
    });

    it("Should that enqueueing an element with a negative priority adds it to the beginning of the queue", () => {
        const queue = new QueuePriority();
        queue.enqueue("task1", 2);
        queue.enqueue("task2", -1);
        queue.enqueue("task3", 3);
        expect(queue.peek().element).toBe("task2");
    });
})