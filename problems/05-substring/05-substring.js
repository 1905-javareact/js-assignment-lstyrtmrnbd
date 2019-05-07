/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    validIndices(startIndex, endIndex, someStr.length);

    let result = "";
    for(let i = startIndex; i < endIndex; i++) {

	result += someStr[i];
    }

    return result;
}

function checkBounds(n, length) {

    if(n < 0 || n >= length) {

	throw(`Error: index ${n} out of bounds`);
    }
}

function validIndices(start, end, length) {

    checkBounds(start, length);
    checkBounds(end, length);

    if(start > end) {

	throw("Start index larger than end");
    }
}
