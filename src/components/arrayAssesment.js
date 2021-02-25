/*1. Sort an array of 0s, 1s and 2s

Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.


Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2} */

export const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // (i = 0; i< 5; i++) ; (j = 0; j<5; j++) j = 0; 1; 2; 3; 4
    for (let j = i; j < arr.length; j++) {
      // (i = 1; i< 5; i++) ; (j = 1; j<5; j++) j = 1; 2; 3; 4
      if (arr[i] > arr[j]) {
        // (i = 2; i< 5; i++) ; (j = 2; j<5; j++) j = 2; 3; 4
        let temp = arr[i]; // store original value for swapping            // (i = 3; i< 5; i++) ; (j = 3; j<5; j++) j = 3; 4
        arr[i] = arr[j]; // set original value position to greater value   // (i = 4; i< 5; i++) ; (j = 4; j<5; j++) j = 4
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

export const segmentSize = (array, x, k) => {
  let n = parseInt(x);
  let i;
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
  // If array length is a multiple of k
  if (parseInt(i) == array.length) {
    return true;
  }
  // Check in last segment if
  // n is not multiple of k.
  for (let l = parseInt(i) - k; l < array.length; l++) {
    if (array[l] == x) {
      break;
    }
    if (l == array.length) {
      return false;
    }
    return true;
  }
};

//---------------------------------------------------------------------------------------------//

// 3. Given an array, cyclically rotate the array clockwise by one.
// Input:  arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}

// Using array methods
const cyclicRotateInBuilt = (n, arr1) => {
  let arr2 = [];
  for (let i = 0; i < n; i++) {
    arr2[i] = arr1.pop();
  }
  arr1 = arr2.concat(arr1);
  console.log(arr1);
};

//cyclicRotateInBuilt(3, [1, 2, 3, 4, 5]);


// Without Using array methods
function cyclicRotate(arr) {
  let x = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = x;
  return arr;
}

export const cyclicRotateTimes = (arr, n) => {
  for (let i = 0; i < n; i++) {
    cyclicRotate(arr);
  }
  return arr;
};

//---------------------------------------------------------------------------------------------//
