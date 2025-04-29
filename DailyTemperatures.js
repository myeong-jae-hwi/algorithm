function DailyTemperatures(arr) {
  let warmTemperatures = 0;
  let result = [];
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    warmTemperatures = arr[i];
    cnt += 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (warmTemperatures < arr[j]) {
        if (j - i < 0) {
          result.push(0);
        } else {
          result.push(j - i);
        }

        break;
      }
    }
  }

  return result;
}

console.log(DailyTemperatures([25, 24, 26, 25, 29, 32, 28, 30]));

// ans : [2,1,2,1,1,0,1,0]
