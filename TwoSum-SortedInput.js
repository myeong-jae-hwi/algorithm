function TwoSum(arr, target) {
  let left = 0;
  let sum = 0;
  let newArr = [];

  for (let right = 0; right <= arr.length; right++) {
    sum += arr[right];

    newArr.push(arr[right]);

    if (sum >= target) {
      console.log("sum: ", sum);
      console.log("left: ", arr[left]);

      sum -= arr[left];
      arr.shift();

      left++;
    }
  }

  return newArr;
}

console.log(TwoSum([2, 7, 11, 15], 9));
