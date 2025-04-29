function AddBorder(arr) {
  let border = [];

  for (let i = 0; i < arr[0].length + 2; i++) {
    border.push("*");
  }

  for (let line of arr) {
    border.push(`*${line}*`);
  }

  border.push(border);

  return border;
}

console.log(AddBorder(["abc", "ded"]));
