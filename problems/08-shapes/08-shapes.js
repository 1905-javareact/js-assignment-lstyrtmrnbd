/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {

    switch(shape) {

    case("Square"):
	printSquare(height, character);
	break;

    case("Triangle"):
	printTriangle(height, character);
	break;

    case("Diamond"):
	printDiamond(height, character);
	break;

    default:
	console.log("Unrecognized shape parameter");
	break;
    }
}

function printSquare(height, character) {

    for(let i = 0; i < height; i++) {

	let line = "";
	for(let j = 0; j < height; j++) {

	    line += character;
	}
	
	console.log(line);
    }
}

function printTriangle(height, character) {

    for(let i = 0; i < height; i++) {
	
	let line = "";
	for(let j = 0; j < i + 1; j++) {
	    
	    line += character;
	}
	
	console.log(line);
    }
}

function printDiamond(height, character) {

    // first position a character appears
    let first = Math.floor(height / 2);
    let firstHalf = false;
    
    for(let i = 0; i < height; i++) {

	let line = "";
	for(let j = 0; j < height; j++) {

	    line += charOrSpace(height, j, first) ? character : " ";
	}
	
	console.log(line);
	[first, firstHalf] = moveFirst(first, height, firstHalf);
    }
}

// true for character, false for space
function charOrSpace(height, j, first) {

    return (j >= first && j < height - first);
}

function moveFirst(first, height, half) {

    half ? first++ : first--;
    
    if(first < 0) {

	first += 2;
	half = true;
    }

    return [first, half];
}
