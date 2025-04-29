function FindMissingNumber(arr) {
  const MAXNUMBER = Math.max(...arr);
  const MINNUMBER = Math.min(...arr);

  for (let i = MINNUMBER; i < MAXNUMBER; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }

  return -1;
}

console.log(FindMissingNumber([3, 7, 1, 2, 8, 4, 5]));
