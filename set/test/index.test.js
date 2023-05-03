const { describe } = require("node:test");
const Set = require("../index");

describe('Set', () => {
    it("Should that a new value can be added to the set", () => {
        const set = new Set()
        expect(set.add(1)).toBe(true)
        expect(set.size()).toBe(1)
        expect(set.values()).toEqual(['1'])
    })

    it("Should that a value can be deleted from the set", () => {
        const set = new Set()
        set.add(1)
        expect(set.delete(1)).toBe(true)
        expect(set.size()).toBe(0)
        expect(set.values()).toEqual([])
    })

    it("Should that adding a duplicate value to the set returns false and does not add the value", () => {
        const set = new Set()
        set.add(1)
        expect(set.add(1)).toBe(false)
        expect(set.size()).toBe(1)
        expect(set.values()).toEqual(['1'])
    })

    it("Should that deleting a value that doesn't exist in the set returns false and does not modify the set", () => {
        const set = new Set()
        expect(set.delete(1)).toBe(false)
        expect(set.size()).toBe(0)
        expect(set.values()).toEqual([])
    })

    it("Should that the has method correctly identifies if a value is in the set", () => {
        const set = new Set()
        set.add(1)
        expect(set.has(1)).toBe(true)
    })

    it("Should that the has method correctly identifies if a value that doesn't exist in the set is not in the set", () => {
        const set = new Set()
        expect(set.has(1)).toBe(false)
    })

    it("Should that the clear method empties the set", () => {
        const set = new Set()
        set.add(1)
        set.clear()
        expect(set.size()).toBe(0)
        expect(set.values()).toEqual([])
    })

    it("Should that the size method returns the correct size of the set", () => {
        const set = new Set()
        set.add(1)
        set.add(2)
        expect(set.size()).toBe(2)
    })

    it("Should that the values method returns an array of all the values in the set", () => {
        const set = new Set()
        set.add(1)
        set.add(2)
        expect(set.values()).toEqual(['1', '2'])
    })

    it("Should that the union method correctly combines two sets into a new set", () => {
        const set1 = new Set()
        set1.add(1)
        set1.add(2)
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        const unionSet = set1.union(set2)
        expect(unionSet.values()).toEqual(['1', '2', '3'])
    })

    it("Should that the intersection method correctly identifies the common values between two sets and returns a new set", () => {
        const set1 = new Set()
        set1.add(1)
        set1.add(2)
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        const intersectionSet = set1.intersection(set2)
        expect(intersectionSet.values()).toEqual(['2'])
    })

    it("Should that the difference method correctly identifies the values in one set that are not in another set and returns a new set", () => {
        const set1 = new Set()
        set1.add(1)
        set1.add(2)
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        const differenceSet = set1.difference(set2)
        expect(differenceSet.values()).toEqual(['1'])
    })

    it("Should that the isSubsetOf method correctly identifies if one set is a subset of another set", () => {
        const set1 = new Set()
        set1.add(1)
        set1.add(2)
        set1.add(3)
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        expect(set2.isSubsetOf(set1)).toBe(true)
    })

    it("Should that the isSubsetOf method correctly identifies if one set is not a subset of another set", () => {
        const set1 = new Set()
        set1.add(1)
        set1.add(2)
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        expect(set2.isSubsetOf(set1)).toBe(false)
    })

    it("Should that the isSubsetOf method when if this.size is greater than the otherSet size", () => {
        const set1 = new Set()
        set1.size()
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        expect(set1.size()).toBe(0)
        expect(set2.size()).toBe(2)
        expect(set2.isSubsetOf(set1)).toBe(false)
    })

    it("Should that the intersection method when if this.size is greater than the otherSet size", () => {
        const set1 = new Set()
        set1.size()
        const set2 = new Set()
        set2.add(2)
        set2.add(3)
        expect(set1.size()).toBe(0)
        expect(set2.size()).toBe(2)
        expect(set1.intersection(set2).values()).toEqual([])
    })
})