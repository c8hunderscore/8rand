import { char } from "../src/index.js";

console.log(char()); // Any character from ASCII from 0x21 to 0x7E
console.log(char(0x7F - 5, 0x7F)); // Any of the last 5 chars in ASCII
console.log(
	char(
		1,
		10,
		"ABCDEFGHIJKL".split(""),
	)
); // Any of ABCDEFGHIJ

