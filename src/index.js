/**
 * Get a random number in a range
 *
 * @param {number|undefined} min? The minimum return value
 * @param {number|undefined} max? The maximum return vakue
 *
 * @returns {number} A random number between `min` and `max`
 */
function rand(min = 0, max = min + 10) {
	return min + Math.floor(Math.random() * (max - min));
}

const charsets = {
	ASCII: (() => [...Array(0x7F)].map((_, i) => String.fromCharCode(i)))(),
	alphanumeric: "\
abcdefghijklmnopqrstuvwxyz\
ABCDEFGHIJKLMNOPQRSTUVWXYZ\
0123456789"
		.split(""),
	ASCIINoControl: (() =>
		[...Array(0x7F - 0x21)].map((_, i) => String.fromCharCode(i + 0x20)))(),
	ASCIIBasic: (() =>
		[...Array(0x7F - 0x22)].map((_, i) => String.fromCharCode(i + 0x21)))(),
};

const { ASCII } = charsets;

/**
 * Get a random char in a range from a charset
 *
 * @param {number|undefined} min? The minimum return value
 * @param {number|undefined} max? The maximum return vakue
 * @param {string[]|undefined} charset? Chars or strings to select from
 *
 * @returns {number} A random char from `charset` between `min` and `max`
 */
function char(min = 0x21, max = 0x7E, charset = ASCII) {
	if (min < 0 || max > charset.length)
		throw new TypeError();

	return charset[rand(min, max)];
}

/**
 * Get a random char in a range from a charset
 *
 * @param {number|undefined} stringLength? The length of the returned string
 * @param {string[]|undefined} charset? Chars or strings to select from
 *
 * @returns {string} A random string made with chars from `charset`
 */
function string(stringLength = 10, charset = charsets.ASCIINoControl) {
	const { length } = charset;

	let chars = [];

	for (let i = 0; i < Math.abs(stringLength); i++)
		chars.push(char(0, length, charset));

	return chars
		.join("")
		.slice(0, stringLength);
}

/**
 * Get a random decimal number in a range
 *
 * @param {number|undefined} min? The minimum return value
 * @param {number|undefined} max? The maximum return vakue
 *
 * @returns {number} A random decimal number between `min` and `max`
 */
function decimal(min = 0, max = min + 10, round = 10) {
	return Math.round(
		(min + Math.random() * (max - min)) * 10 ** round
	) / 10 ** round;
}

/**
 * Get a random boolean with a `chance`% chance of being true
 *
 * @param {number|undefined} chance? The chance of returning `true`
 *
 * @returns {boolean} `true` or `false`
 */
function bool(chance = 50) {
	if (chance < 0 || chance > 100)
		throw new TypeError();

	const number = rand(0, 100);

	return number <= chance;
}

/**
 * Randomize the order of `array`
 *
 * @param {any[]} array The array to randomize
 *
 * @returns {any[]} A random number between `min` and `max`
 */
function order(array) {
	if (!array.length || !(array instanceof Array))
		throw new TypeError();

	return array.sort(() => bool() ? 1 : -1);
}

/**
 * Get a raw `Math.random()`
 *
 * @returns {number} `Math.random()`
 */
function raw() {
	return Math.random();
}

// export default rand;
export {
	rand as default,
	char,
	string,
	decimal,
	bool,
	order,
	charsets,
	raw,
};

