/**
 * Problem:
 * Given a string s, reverse the order of words.
 * Words are separated by spaces.
 *
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 */

function ReverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
