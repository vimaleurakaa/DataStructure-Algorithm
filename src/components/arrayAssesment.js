// 1. Sort an array of 0s, 1s and 2s
// Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}

let Arr = [0, 1, 2, 0, 1, 2];
console.log(Arr.sort());

let newarr = [];
// Sorting array
const sort_ascending = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
};

function sortGreatest(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i]; // store original value for swapping
        arr[i] = arr[j]; // set original value position to greater value
        arr[j] = temp; // set greater value position to original value
      }
    }
  }
  return arr;
}

let val = sort_ascending([0, 1, 2, 0, 1, 2]);

console.log(val);
