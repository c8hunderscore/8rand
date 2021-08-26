# 8rand
Generate random things

## General use
In Node.JS, you will usually import the library with `require`:
```js
const rand = require("8rand");
// or
const { bool } = require("8rand");
```
Other times you might use `import`:
```js
import rand from "8rand";
// or
import { bool } from "8rand";
// or
import rand, { bool } from "8rand";
// or
import {
	default as rand,
	bool
} from "8rand";
```

## Integers
Generate a random integer between `min` and `max`.
If `min` is not present, `min` is `0`.
If `max` is not present, `max` is `min + 10`.
```js
console.log(rand());      // 0-10
console.log(rand(5));     // 5-15
console.log(rand(5, 10)); // 5-10
```

## Characters
You can generate a single character from a charset or from ASCII.
If `min` is not present, `min` is `0x20`.
If `max` is not present, `max` is `0x7E`.
If `charset` is not present, `charset` is [`charsets.ASCII`](#charsets)
```js
console.log(rand.char()); // Any ASCII char from 0x20 to 0x7E
console.log(rand.char(0x70)); // Any of the last 15 ASCII chars (excluding DEL)
console.log(rand.char(0, 0x7F)); // ANY ASCII character, including control chars
console.log(
	rand.char(
		0, 5,
		"ABCDE".split(""),
	)
); // Any of A, B, C, D, E
```

## Strings
You can generate a random string of a given length using a given charset
If `stringLength` is not present, `stringLength` is `10`
If `charset` is not present, `charset` is [`charsets.ASCIINoControl`](#charsets)
```js
console.log(rand.string());   // 10 random chars, 0x21-0x7E of ASCII
console.log(rand.string(50)); // 50 random chars, 0x21-0x7E of ASCII
console.log(
	rand.string(
		50,
		rand.charsets.alphanumeric,
	)
); // 50 random alphanumeric chars
```

## Decimals
You can generate a decimal number with a given accuracy.
If `min` is not present, `min` is `0`.
If `max` is not present, `max` is `min + 10`.
If `round` is not present, `round` is `10`
```js
console.log(rand.decimal());         // 0-10, rounded to 10 decimal places
console.log(rand.decimal(5));        // 5-15, rounded to 10 decimal places
console.log(rand.decimal(5, 10));    // 5-10, rounded to 10 decimal places
console.log(rand.decimal(5, 10, 2)); // 5-10, rounded to 2 decimal places
```

## Booleans
You can generate `true` or `false` with a given bias.
`chance` is the only argument.
default value is 50, cannot be more than 100, cannot be less than 0.
```js
console.log(bool());    // 50% chance of being `true`
console.log(bool(90));  // 90% chance of being `true`
console.log(bool(10));  // 90% chance of being `false`
console.log(bool(100)); // `true`
console.log(bool(0));   // `false`
```

## Randomize array order
This one is hopefully self-explanatory
```js
console.log(order([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // New unsorted array
```

## Raw
This one should be avoided.
```js
rand.raw(); // Same as Math.random();
```

## Charsets
As of now, there are 4 pre-made charsets.
- ASCII
- alphanumeric
- ASCIINoControl
- ASCIIBasic

### ASCII
The ASCII charset, a 7-bit charset which was standard until UTF-8 arrived,
but it is still widely used as it is easier to manage smaller amounts of characters.

### Alphanumeric
a-z, A-Z, 0-9. No spaces, no symbols, only letters and numbers.

### ASCIINoControl
ASCII without the first 32 characters, which are control characters.

### ASCIIBasic
ASCIINoControl without space.

# LICENCE
`rand` is under the MIT licence

