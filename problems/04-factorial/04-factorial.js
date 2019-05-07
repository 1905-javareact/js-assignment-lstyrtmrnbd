/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {

    return (sumNum === 0) ? sumNum : sumNum + factorial(sumNum - 1);
}
