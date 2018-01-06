function duplicateCount(text){
	var count = 0, numbers = {};

	// Store the number of appearances in an objects's properties
	// The prop name represents the unique character
	text.split('').forEach( c => {
		c = c.toLowerCase();
 		if (numbers[c]) {
			if (numbers[c] === 1) { count++};
			numbers[c] += 1;
		} else {
			 numbers[c]  = 1;
		}
	});

	return count;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

