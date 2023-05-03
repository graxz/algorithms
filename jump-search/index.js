class JumpSearch {
    constructor(arr, x) {
        this.arr = arr;
        this.x = x;
    }

    search() {
        const n = this.arr.length;
        let step = Math.floor(Math.sqrt(n));
        let prev = 0;

        while (this.arr[Math.min(step, n) - 1] < this.x) {
            prev = step;
            step += Math.floor(Math.sqrt(n));
            if (prev >= n) {
                return -1;
            }
        }

        while (prev < Math.min(step, n) && this.arr[prev] < this.x) {
            prev++;
          }
          
        return this.arr[prev] === this.x ? prev : -1;
    }
}

module.exports = JumpSearch;
