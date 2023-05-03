const { describe } = require("node:test");
const HashTable = require('../index');

describe('Hash Table', () => {
    it("Should data can be successfully added to the hash table", () => {
        const hashTable = new HashTable();
        hashTable.put("apple");
        expect(hashTable.get("apple")).toBe("apple");
    });

    it("Should data can be successfully retrieved from the hash table", () => {
        const hashTable = new HashTable();
        hashTable.put("apple");
        expect(hashTable.get("apple")).toBe("apple");
    });

    it("Should the hash table can handle empty data input", () => {
        const hashTable = new HashTable();
        hashTable.put("");
        expect(hashTable.get("")).toBe("");
    });

    it("Should the hash table can handle data input with length greater than the hash table size", () => {
        const hashTable = new HashTable();
        const longString = "a".repeat(200);
        hashTable.put(longString);
        expect(hashTable.get(longString)).toBe(longString);
    });

    it("Should the hash table can handle negative hash values", () => {
        const hashTable = new HashTable();
        hashTable.put("apple");
        hashTable.put("banana");
        hashTable.put("cherry");
        const negativeHash = -1;
        expect(hashTable.table[negativeHash]).toBeUndefined();
    });

    it("Should the behavior of the class when the table is empty", () => {
        const hashTable = new HashTable();
        expect(hashTable.get("key")).toBeUndefined();
        expect(hashTable.contains("key")).toBe(false);
        hashTable.remove("key");
        expect(hashTable.get("key")).toBeUndefined();
    });

    it("Should the better hash function works as expected", () => {
        const hashTable = new HashTable();
        const hash = hashTable.betterHash("key");
        expect(hash).toBe(95);
    });

    it("Should the simple hash function works as expected", () => {
        const hashTable = new HashTable();
        const hash = hashTable.simpleHash("key");
        expect(hash).toBe(55);
    });
})