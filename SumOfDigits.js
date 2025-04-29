/**
 * Problem:
 * Given a non-negative integer n, repeatedly add all its digits until the result has only one digit.
 *
 * Example:
 * Input: 38
 * Process: 3 + 8 = 11 → 1 + 1 = 2
 * Output: 2
 */

function SumOfDigits(num) {
  const stringNum = String(num);
  let sum = 0;
  const char = stringNum.split("");

  if (num < 10) return num;

  char.forEach((item) => {
    sum += Number(item);
  });

  return SumOfDigits(sum);
}

console.log(SumOfDigits(34));
