function duplicateCount(text){
	var count = 0, numbers = {};

	// Store the number of appearances in an objects's properties
	// The prop name represents the unique character
	text.split('').forEach( c => {
		c = c.toLowerCase();
 		numbers[c] ?  numbers[c] += 1 : numbers[c]  = 1;
	});

	// Iterate over the object's properties and count duplicates (value -> 1) 
	for (p in numbers) {
		if (numbers[p] > 1) {
			count++;
		}
	}
	return count;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

