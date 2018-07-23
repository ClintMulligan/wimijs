// sumArray
// "use strict"

// MODULE JSDOC
/**
 * @module sumArray
 * @desc sumArray adds each value in an array and returns a single value.
 * @see MyClass#myInstanceMethod
 * @see The <a href="https://www.w3schools.com/jsref/jsref_reduce.asp">JavaScript Array reduce() Method</a>.
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
 * @example <caption>Usage of sumArray</caption>
 *
 * //Given an array of numbers
 * const numbers = [-4, -1, 0, 3, 6, 21, -60]
 * let sumNumbers = sumArray(numbers)
 *
 * console.log(sumNumbers) // expected -35
 */

// EXPORTS
// NO export default unless low level util function with one output
export { sumArray }

// IMPORTS

// VARIABLES

// FUNCTIONS
/**
 * @function sumArray
 * @param {object[]} array array to be added together
 * @return {number} summation a single integer (and sign (-) if negative
 * representing the value.
 * @throws {TypeError} if input is not an array
 */
function sumArray(array) {
  let summation = []

  summation = array.reduce( (x, y) => x + y)
  return summation
}

// INVOKE FUNCTIONS

// ERROR

// LOGGING

// TESTING

/* NOTES:
*/
