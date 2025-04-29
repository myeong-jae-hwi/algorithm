function alternatingSums(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    evenSum += arr[i];
  }

  for (let i = 1; i < arr.length; i += 2) {
    oddSum += arr[i];
  }

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
