import {
	char,
	string,
	charsets,
} from "../src/index.js";

// To view control chars easier
import { inspect } from "util";

console.log(inspect(char(0, 20, charsets.ASCII)));
console.log(inspect(string(20, charsets.ASCIINoSpace)));

const myCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

console.log(inspect(string(20, myCharset)));

const myOtherCharset = [
	"abc", "def", "ghi",
	"jkl", "mno", "pqr",
	"stu", "vwx", "yz",
];

console.log(inspect(string(20, myOtherCharset)));

