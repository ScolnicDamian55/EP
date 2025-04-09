function countOccurrences(arr, value) {
    return arr.reduce((count, item) => item === value ? count + 1 : count, 0);
  }

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2)); 
console.log(countOccurrences(['a', 'b', 'a', 'c'], 'a')); 
  