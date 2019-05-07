/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {

    return someStr === reverseStr(someStr);
}

function reverseStr(someStr) {

    let result = "";
    for(let i = someStr.length - 1; i >= 0; i--) {

	result += someStr[i];
    }
    return result;
}

