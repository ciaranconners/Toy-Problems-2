/**
 * @class Hash Table data structure
 * @property {object} collection
 * @method hasher @param {string} str The function that produces our hash keys
 * @method add @param {string} key @param {*} value The key value pair to add to the hash table
 * @method remove @param {string} key @return {*} Accepts an un-hashed key, removes and returns associated value
 * @method lookup @param {string} key @return {*} Accepts an un-hashed key, returns associated value
 */

class HashTable {
  constructor() {
    this.collection = {};
  }

  hasher(key, max = 100) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) + hash + key.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  }

  add(key, value) {
    const hashedKey = this.hasher(key);
    if (this.collection[hashedKey]) {
      for (let x of this.collection[hashedKey]) {
        if (x[0] === key) {
          x[1] = value;
          return;
        }
        this.collection[hashedKey].push([key, value]);
      }
    } else {
      this.collection[hashedKey] = [];
      this.collection[hashedKey].push([key, value]);
    }
  }

  remove(key, value) {
    const hashedKey = this.hasher(key);
    if (this.collection[hashedKey]) {
      for (let i = 0; i < this.collection[hashedKey].length; i++) {
        const current = this.collection[hashedKey][i];
        if (current[0] === key) {
          this.collection[hashedKey].splice(i, 1);
          return current[1];
        }
      }
    } else {
      return null;
    }
  }

  lookup(key) {
    const hashedKey = this.hasher(key);
    if (this.collection[hashedKey]) {
      for (let i = 0; i < this.collection[hashedKey].length; i++) {
        const current = this.collection[hashedKey][i];
        if (current[0] === key) {
          return current[1];
        }
      }
    } else {
      return null;
    }
  }

  print() {
    console.log(JSON.stringify(this.collection, null, 2));
  }
}

// example usage:

const table = new HashTable();

table.add("Aidan Smith", "(555) 876-2344");
table.add("Nadia Mihst", "(555) 934-5288");

table.add("Darin Shultz", "(555) 979-8276");
table.add("Tyler Tate", "(555) 278-4327");
table.add("Etta Tyler", "(555) 525-0384");
table.add("Daisy Harris", "(555) 634-0053");
table.add("Diana Shmit", "(555) 451-8529");
table.add("Sayid Shirra", "(555) 232-5978");
table.add("Thomas Brock", "(555) 244-9832");

table.print();

console.log("\nlookup 'Thomas Brock': " + table.lookup("Thomas Brock"));

console.log("lookup 'Sayid Shirra': " + table.lookup("Sayid Shirra"));

table.remove("Aidan Smith");
table.remove("Nadia Mihst");
table.remove("Darin Shultz");

console.log("lookup 'Nadia Mihst': " + table.lookup("Nadia Mihst") + "\n\n");

table.print();