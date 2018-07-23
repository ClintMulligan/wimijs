// curry
// "use strict"

// MODULE JSDOC
/**
 * @module curry
 * @desc Currying is the technique of translating the evaluation of a function
 * that takes multiple arguments (or a tuple of arguments) into evaluating a
 * sequence of functions, each with a single argument.
 *
 * @see <a href="https://en.wikipedia.org/wiki/Currying">Currying ( wikipedia</a>.
 * @see <a href="https://sunjay.ca/2016/08/13/es6-currying">Currying Functions in ES6</a>
 * @see <a href="https://github.com/learn-javascript-courses/es6-curry/blob/master/source/curry.js">Eric Elliott's ES6 curry</a>
 * @version 0.0.1
 *
 * @license BSD 3-Clause "New" or "Revised" License
 * BSD 3-Clause License
 * Copyright (c) 2018, Clinton Ray Mulligan
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * Neither the name of the copyright holder nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * @example <caption>Use Curry function and input array for values</caption>
 * const add3 = (a, b, c) => a + b + c
 * const numbers = [3, 4, 5]
 *
 * // Returns 12
 * // using the spread operator (...) to convert array to input for parameters.
 * const sum3Integers = curry(add3)(...numbers)
 * console.log(sum3Integers)
 *
 * @example <caption>Use Curry to partially apply inputs to a function</caption>
 * const add3 = (a, b, c) => a + b + c
 * const numbersLess = [7, 11]
 *
 * // Returns type "function"
 * const partiallyAppliedFunction = curry(add3)(...numbersLess)
 * console.log(partiallyAppliedFunction)
 *
 * // Completes Partial
 * // Returns 21
 * const completeMyFunction = partiallyAppliedFunction(3)
 * console.log(completeMyFunction)
 */

//  EXPORTS
export { curry }

// IMPORTS

// VARIABLES

// FUNCTIONS
/**
 * @function curry
 * @param {function} funct function to apply
 * @param {...?(object[]|string)} inputs array of values
 * @param {number} length fuction.length ie params needed, default self setting
 * @return {function} if arguments not fufilled
 * @return {string|number} depending on application of function to parameters
 * @throws {TypeError} if first input is not function
 */

const curry = (funct, inputs = [], length = funct.length) =>
  (...params) =>
    ( (tuple) => tuple.length >= length ? funct(...tuple) :
      curry(funct, tuple) )([...inputs, ...params])

// INVOKE FUNCTIONS

// ERROR

// LOGGING

// TESTING

/* NOTES
// Old code kept for clarity
function curry(funct, ...tuple) {
  if (tuple.length >= funct.length) {
    return funct(...tuple)
  } // else {
  return (...partials) => curry(funct, ...tuple, ...partials)
}
*/
