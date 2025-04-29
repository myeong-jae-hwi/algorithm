/**
 *
 * Problem
 * Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * Example:
 * Input: "()[]{}"
 * Output: true
 *
 * Input: "[(])"
 * Output: false
 */

function ValidParentheses(str) {
  let stack = [];

  const map = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  for (char of str) {
    console.log(char);

    if (char === "]" || char === ")" || char === "}") {
      console.log("pop");
      console.log(stack.pop());

      if (stack.pop() !== map[char]) {
        console.log(map[char]);
        return false;
      }
    } else {
      console.log("push");
      stack.push(char);
    }
  }

  return stack.length === 0;
}
