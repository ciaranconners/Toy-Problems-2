function findUniq(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current.toString() in seen) {
      seen[current]++;
    } else {
      seen[current] = 1;
    }
  }
  for (let x of Object.keys(seen)) {
    if (seen[x] === 1) {
      return parseInt(x);
    }
  }
  return null;
}

// findUniq([0, 1, 0]);           => 1
// findUniq([1, 1, 1, 2, 1, 1]);  => 2
// findUniq([3, 10, 3, 3, 3]);    => 10