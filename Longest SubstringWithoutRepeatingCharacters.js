/**
 * Longest Substring Without Repeating Characters
 *
 * Problem:
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example:
 * Input: "abcabcbb"
 * Output: 3
 * (Explanation: The answer is "abc", with length 3.)
 */

function LongestSubstring(str) {
  let set = new Set();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
