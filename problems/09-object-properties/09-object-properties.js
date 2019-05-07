/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {

    for(let property in someObj) {

	console.log(`${property}: ${someObj[property]}`);
    }
}
