/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {

    return (someNum >= 0) ? positiveEven(someNum) : negativeEven(someNum);
 }

function positiveEven(n) {

    return (n === 0) ? true :
	(n < 0) ? false : positiveEven(n - 2);
}

function negativeEven(n) {

    return (n === 0) ? true :
	(n > 0) ? false : negativeEven(n + 2);

}
