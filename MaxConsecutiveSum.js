function MaxConsecutiveSum(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  let maxArr = [];

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];

    maxSum = Math.max(maxSum, windowSum);
  }

  return [maxSum, maxArr];
}

console.log(MaxConsecutiveSum([2, 1, 5, 1, 3, 2], 3));
