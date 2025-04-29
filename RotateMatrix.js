/*
 * Rotate Matrix
 * Problem:
 * Given a 2D array (matrix) of n × n elements, rotate the matrix by 90 degrees clockwise.
 * 
 * Example:
 * Input
 * [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
   ]
 * Output
 * [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
   ]
 * 
 * 
 */

function RotateMatrix(arr) {
  const ENDPOINT = arr.length;
  let rotateMatrix = Array.from({ length: ENDPOINT }, () => Array(ENDPOINT).fill(0)); // 2차 배열 선언

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      rotateMatrix[j][ENDPOINT - 1 - i] = arr[i][j]; // 회전 핵심 로직 (길이 - 1- i)
    }
  }

  console.log(rotateMatrix);

  return rotateMatrix;
}
