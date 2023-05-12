class TernarySearch {
    constructor(array) {
        this.array = array;
    }

    search(value) {
        let left = 0;
        let right = this.array.length - 1;

        while (left <= right) {
            let leftMid = Math.floor(left + (right - left) / 3);
            let rightMid = Math.floor(right - (right - left) / 3);

            if (this.array[leftMid] === value) {
                return leftMid;
            }

            if (this.array[rightMid] === value) {
                return rightMid;
            }

            if (value < this.array[leftMid]) {
                right = leftMid - 1;
            } else if (value > this.array[rightMid]) {
                left = rightMid + 1;
            } else {
                left = leftMid + 1;
                right = rightMid - 1;
            }
        }

        return -1;
    }
}

module.exports = TernarySearch;
