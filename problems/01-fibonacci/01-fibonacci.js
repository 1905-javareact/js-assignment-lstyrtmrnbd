/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    return (n < 2) ? n : fib(n - 1) + fib(n - 2);
}
