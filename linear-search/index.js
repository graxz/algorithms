class LinearSearch {
    constructor(array) {
        this.array = array;
    }
    
    search(value) {
        for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] === value) {
            return i;
        }
        }
        return -1;
    }
}

module.exports = LinearSearch;
