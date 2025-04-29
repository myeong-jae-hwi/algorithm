function product(arr) {
  let ans = 0;
  let prevAns = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    ans = arr[i] * arr[i + 1];

    if (prevAns < ans) {
      prevAns = ans;
    }
  }
  return prevAns;
}
