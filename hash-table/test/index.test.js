const { describe } = require("node:test");
const HashTable = require('../index');

describe('Hash Table', () => {
    
    // Tests that data can be successfully added to the hash table. 
    it("test_put_successfully", () => {
        const hashTable = new HashTable();
        hashTable.put("apple");
        expect(hashTable.get("apple")).toBe("apple");
    });

    // Tests that data can be successfully retrieved from the hash table. 
    it("test_get_successfully", () => {
        const hashTable = new HashTable();
        hashTable.put("apple");
        expect(hashTable.get("apple")).toBe("apple");
    });

    // Tests that the hash table can handle empty data input. 
    it("test_empty_input", () => {
        const hashTable = new HashTable();
        hashTable.put("");
        expect(hashTable.get("")).toBe("");
    });

    // Tests that the hash table can handle data input with length greater than the hash table size. 
    it("test_long_input", () => {
        const hashTable = new HashTable();
        const longString = "a".repeat(200);
        hashTable.put(longString);
        expect(hashTable.get(longString)).toBe(longString);
    });

    // Tests that the hash table can handle negative hash values. 
    it("test_negative_hash", () => {
        const hashTable = new HashTable();
        hashTable.put("apple");
        hashTable.put("banana");
        hashTable.put("cherry");
        const negativeHash = -1;
        expect(hashTable.table[negativeHash]).toBeUndefined();
    });

    // Tests the behavior of the class when the table is empty. 
    it("test_empty_table", () => {
        const hashTable = new HashTable();
        expect(hashTable.get("key")).toBeUndefined();
        expect(hashTable.contains("key")).toBe(false);
        hashTable.remove("key");
        expect(hashTable.get("key")).toBeUndefined();
    });

    // Tests that the better hash function works as expected.
    it("test_better_hash_function", () => {
        const hashTable = new HashTable();
        const hash = hashTable.betterHash("key");
        expect(hash).toBe(95);
    });

    // Tests that the simple hash function works as expected.
    it("test_simple_hash_function", () => {
        const hashTable = new HashTable();
        const hash = hashTable.simpleHash("key");
        expect(hash).toBe(55);
    });
})