class HashTable {
    constructor() {
        this.table = new Array(137);
    }
    
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    
    betterHash(data) {
        const H = 37;
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i);
        }
        
        total = total % this.table.length;

        return parseInt(total);
    }

    put(data) {
        let pos = this.betterHash(data);
        this.table[pos] = data;
    }

    get(key) {
        return this.table[this.betterHash(key)];
    }

    remove(key) {
        this.table[this.betterHash(key)] = undefined;
    }

    contains(key) {
        return this.table[this.betterHash(key)] !== undefined;
    }
}

module.exports = HashTable;
