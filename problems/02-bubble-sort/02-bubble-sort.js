/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {

    let sorted = false;
    while(!sorted) {

	sorted = true;
	for(let i = 0; i < numArray.length - 1; i++) {

	    if(numArray[i] > numArray[i + 1]) {

		rotate(numArray, i, i + 1);
		sorted = false;
	    }
	}
    }

    return numArray;
}

function rotate(arr, i, j) {

    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
