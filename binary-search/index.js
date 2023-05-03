class BinarySearch {
    constructor(array) {
        this.array = array;
    }
    
    search(value) {
        let start = 0;
        let end = this.array.length - 1;
        let middle = Math.floor((start + end) / 2);
        while (this.array[middle] !== value && start <= end) {
            if (value < this.array[middle]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
            middle = Math.floor((start + end) / 2);
        }
        return this.array[middle] === value ? middle : -1;
    }
}

module.exports = BinarySearch;
