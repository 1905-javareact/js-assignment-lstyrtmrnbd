/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {

    let result = "";
    for(let i = someStr.length - 1; i >= 0; i--) {

	result += someStr[i];
    }
    return result;
}
