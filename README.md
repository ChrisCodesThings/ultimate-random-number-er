# ultimate-random-number-er &middot; [![Test workflow status](https://github.com/ChrisCodesThings/ultimate-random-number-er/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/ultimate-random-number-er)](https://www.npmjs.com/package/@chriscodesthings/ultimate-random-number-er) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Generates random numbers with options for ranges, repetition, past and future sequences ... and more!**

## Description

Ultimate Random Numberer provides many extensions to the very basic `Math.random()` function.

In its basic form it can be called simply with a range and it will return a single random number in that range. It works as a simple function and does not initalize a new object.

In its extended form, it returns a class enabling more advanced features.

## Install

```sh
npm install --save @chriscodesthings/ultimate-random-number-er
```

## Simple Form

### Use

```js
import ultimateRandom from '@chriscodesthings/ultimate-random-number-er';

console.log(ultimateRandom(10));
// => 4

console.log(ultimateRandom(10,20));
// => 17
```

### Syntax

```js
ultimateRandom(n1, n2);
```

### Parameters
- *n1*: random number range, or lower limit
- *n2 (optional)*: random number upper limit

### Return Value

Returns a random number. If only *n1* is specified, the number is from 0 to *n1*. If *n2* is specified, the number is from *n1* to *n2*.

Ranges are inclusive of the upper and lower limits.

## Extended Form

### Use

```js
import ultimateRandom from '@chriscodesthings/ultimate-random-number-er';

const random = ultimateRandom({ options });

console.log(random.number());
// => 12
```

### Options

- *repeat*: Default `true`. If `false`, the same number won't be returned until the entire range has been used
- *history*: Default `false`. If `true`, all previous random numbers are stored and can be retreived with the `last()` method.

### Parameters
- *n1*: random number range, or lower limit
- *n2 (optional)*: random number upper limit

### Return Value

Returns the Ultimate Random Numberer class.

---

# Methods

## number()

### Description

Gets a random number.

### Use

```js
console.log(random.number());
// => 17
```

### Parameters

- *none*

### Returns

Returns a random number according to the range and options provided when the class was initalized.