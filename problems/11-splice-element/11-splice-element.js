/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    
    return someArr.slice(0, index).concat(someArr.slice(index+1, someArr.length - 1));
}
