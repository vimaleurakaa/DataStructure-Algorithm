//Quiz 1

//recursion function

//Problem Statement 1
// Find the O/P when x =5 , y=2
const fun1 = (x, y) => {
  if (x == 0) {
    return y;
  } else {
    return fun1(x - 1, x + y);
  }
};

//Problem Statement 2
const fun2 = (x) => {
  if (x == 4) {
    return x;
  } else {
    return 2 * fun2(x + 1);
  }
};

//Problem Statement 3
const fun3 = (n) => {
  let x = parseInt(n);
  if (x == 0) return;
  console.log(x % 2);
  return fun3(x / 2);
};

//Problem Statement 4
const fun4 = (x, y) => {
  if (y == 0) {
    return 0;
  }
  return x + fun4(x, y - 1);
  //This function returns multiplication of any given input!
};

//Problem Statement 5

const fun5 = (n) => {
  let x = parseInt(n);
  if (x <= 1) {
    return 1;
  }
  if (x % 2 == 0) {
    return fun5(x / 2);
  }
  return fun5(x / 2) + fun5(x / 2 + 1);
};

const fun6 = (x) => {
  let n = parseInt(x);
  if (n == 0 || n == 1) return n;
  if (n % 3 != 0) return 0;
  return fun6(n / 3);

  //returns 1 when n is power of 3
};

export { fun1, fun2, fun3, fun4, fun5, fun6 };
