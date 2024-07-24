function fibonacces(n) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacces(n - 1) + fibonacces(n - 2);
    }
  }
 
  let n = -1
 
    for (let i = 0; i < n; i++) {
      console.log(fibonacces(i));
    } 