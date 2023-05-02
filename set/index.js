class Set {
    constructor() {
        this.items = {}
    }

    add(value) {
        if (this.has(value)) return false
        this.items[value] = value
        return true
    }

    delete(value) {
        if (!this.has(value)) return false
        delete this.items[value]
        return true
    }

    has(value) {
        return this.items.hasOwnProperty(value)
    }

    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length
    }

    values() {
        return Object.keys(this.items)
    }

    union(otherSet) {
        const unionSet = new Set()
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value => unionSet.add(value))
        return unionSet
    }

    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        let biggerSet = values
        let smallerSet = otherValues
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues
            smallerSet = values
        }
        smallerSet.forEach(value => {
        if (biggerSet.includes(value)) {
            intersectionSet.add(value)
        }
        })
        return intersectionSet
    }

    difference(otherSet) {
        const differenceSet = new Set()
        this.values().forEach(value => {
        if (!otherSet.has(value)) {
            differenceSet.add(value)
        }
        })
        return differenceSet
    }

    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) return false
        let isSubset = true
        this.values().every(value => {
        if (!otherSet.has(value)) {
            isSubset = false
            return false
        }
        return true
        })
        return isSubset
    }
}

module.exports = Set
