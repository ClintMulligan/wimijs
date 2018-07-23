// curry
// "use strict"

// MODULE JSDOC
/**
 * @module compareNumbers
 * @desc Compare Numbers is a simple script that substracts two numbers for use
 *
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
 * @example <caption>Use compareNumbers to sort number array
 * (ascending default)</caption>
 * // array.prototype.sort sorts alphabetically to use with numbers
 * add this method
 *
 * const numbers = [5, 2, 32, -2, 0, -12, -1]
 * let sortedArray = numbers.sort()
 *
 * console.log(sortedArray) // what you get [-1, -12, -2, 2, 32, 5]
 *
 * let ascendSortedArray = numbers.sort(compareNumbers)
 * console.log(ascendSortedArray) // expected [-12, -2, -1, 0, 2, 5, 32]
 *
 * @example <caption>Use compareNumbers to sort number array descending</caption>
 *
 * const numbers = [5, 2, 32, -2, 0, -12, -1]
 * const descendNumbers = (a, b) => compareNumbers(a, b, false)
 * let descendSortedArray = numbers.sort(descendNumbers)
 * console.log(descendSortedArray) // expected [32, 5, 2, 0, -1, -2, -12]
 */

// EXPORTS
export { compareNumbers }

// IMPORTS

// VARIABLES

// FUNCTIONS
/**
 * compareNumbers
 * @param {number} x integer
 * @param {number} y integer
 * @param {boolean} [ascend = true] boolean TRUE for ascending order
 * @return {number} depending on application of function to parameters
 * @throws {TypeError} inputs not numbers
 */
function compareNumbers(x, y, ascend = true) {
  if (ascend) {
    const sortAscending = x - y

    return sortAscending
  } // else {
  const sortDescending = y - x

  return sortDescending
}

// INVOKE FUNCTIONS

// ERROR

// LOGGING

// TESTING

/* NOTES
*/
