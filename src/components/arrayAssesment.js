/*1. Sort an array of 0s, 1s and 2s

Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2} */

export const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]; // store original value for swapping
        arr[i] = arr[j]; // set original value position to greater value
        arr[j] = temp; // set greater value position to original value
      }
    }
  }
  return arr;
};

//---------------------------------------------------------------------------------------------//

// 2. Given an array arr[] and size of array is n and one another key x, and give you a segment size k. The task is to find that the key x present in every segment of size k in arr[].
// Input :
// arr[] = { 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3}
// x = 3
// k = 3
// Output : Yes
// There are 4 non-overlapping segments of size k in the array, {3, 5, 2}, {4, 9, 3}, {1, 7, 3} and {11, 12, 3}. 3 is present all segments

const segmentSize = (array, x, k) => {
  let n = parseInt(x);
  let i;
  console.log("first fun");
  for (i = 0; i < array.length; i = i + k) {
    // Search x in segment
    // starting from index i.
    for (let j = 0; j < k; j++) {
      if (array[i + j] == n) {
        break;
      }
      // If loop didn't break
      if (j == k) {
        return false;
      }
    }
  }
  console.log("if fun");
  // If array length is a multiple of k
  if (parseInt(i) == array.length) {
    console.log("if ok");
    // return true;
  }
  // Check in last segment if
  // n is not multiple of k.
  for (let l = parseInt(i) - k; l < array.length; l++) {
    if (array[l] == x) {
      console.log("break");
      break;
    }
    if (l == array.length) {
      console.log("false");
      return false;
    }
    return true;
  }
};

const myArray = [3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3];

console.log(segmentSize(myArray, 3, 6));

// if (segmentSize(myArray, 3, 6)) {
//   console.log("Yes");
// } else console.log("No");
