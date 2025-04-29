function isPalindrome(str) {
  let palindrome = false;

  if (str === str.split("").reverse().join("")) palindrome = true;

  return palindrome;
}
