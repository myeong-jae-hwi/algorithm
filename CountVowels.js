/**
 * Problem:
 * Write a function that counts the number of vowels ('a', 'e', 'i', 'o', 'u') in a given lowercase string.
 *
 * Example:
 * Input: "hello"
 * Output: 2
 * (Explanation: 'e' and 'o' are vowels.)
 */

function CountVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const char = str.split("");
  let cnt = 0;

  for (let i = 0; i < char.length; i++) {
    if (vowels.includes(char[i])) {
      cnt += 1;
    }
  }
  return cnt;
}
