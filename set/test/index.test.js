const { describe } = require("node:test");
const Set = require("../index");

describe('Set', () => {
    
    // Tests that a new value can be added to the set. 
    it("test_add_new_value", () => {
        const set = new Set()
        expect(set.add(1)).toBe(true)
        expect(set.size()).toBe(1)
        expect(set.values()).toEqual(['1'])
    })

    // Tests that a value can be deleted from the set. 
    it("test_delete_value", () => {
        const set = new Set()
        set.add(1)
        expect(set.delete(1)).toBe(true)
        expect(set.size()).toBe(0)
        expect(set.values()).toEqual([])
    })

    // Tests that adding a duplicate value to the set returns false and does not add the value. 
    it("test_add_duplicate_value", () => {
        const set = new Set()
        set.add(1)
        expect(set.add(1)).toBe(false)
        expect(set.size()).toBe(1)
        expect(set.values()).toEqual(['1'])
    })

    // Tests that deleting a value that doesn't exist in the set returns false and does not modify the set. 
    it("test_delete_nonexistent_value", () => {
        const set = new Set()
        expect(set.delete(1)).toBe(false)
        expect(set.size()).toBe(0)
        expect(set.values()).toEqual([])
    })

    // Tests that the has method correctly identifies if a value is in the set. 
    it("test_has_value", () => {
        const set = new Set()
        set.add(1)
        expect(set.has(1)).toBe(true)
    })

    // Tests that the has method correctly identifies if a value that doesn't exist in the set is not in the set. 
    it("test_has_nonexistent_value", () => {
        const set = new Set()
        expect(set.has(1)).toBe(false)
    })

    // Tests that the clear method empties the set. 
    it("test_clear_set", () => {
        const set = new Set()
        set.add(1)
        set.clear()
        expect(set.size()).toBe(0)
        expect(set.values()).toEqual([])
    })

    // Tests that the size method returns the correct size of the set. 
    it("test_get_size", () => {
        const set = new Set()
        set.add(1)
        set.add(2)
        expect(set.size()).toBe(2)
    })

    // Tests that the values method returns an array of all the values in the set. 
    it("test_get_values", () => {
        const set = new Set()
        set.add(1)
        set.add(2)
        expect(set.values()).toEqual(['1', '2'])
    })

    // Tests that the union method correctly combines two sets into a new set. 
    it("test_union_sets", () => {
        const set1 = new Set()
        set1.add(1)
        set1.add(2)
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        const unionSet = set1.union(set2)
        expect(unionSet.values()).toEqual(['1', '2', '3'])
    })

    // Tests that the intersection method correctly identifies the common values between two sets and returns a new set. 
    it("test_intersection_sets", () => {
        const set1 = new Set()
        set1.add(1)
        set1.add(2)
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        const intersectionSet = set1.intersection(set2)
        expect(intersectionSet.values()).toEqual(['2'])
    })

    // Tests that the difference method correctly identifies the values in one set that are not in another set and returns a new set. 
    it("test_difference_sets", () => {
        const set1 = new Set()
        set1.add(1)
        set1.add(2)
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        const differenceSet = set1.difference(set2)
        expect(differenceSet.values()).toEqual(['1'])
    })
})