// index.mjs

// "use strict"

// MODULE JSDOC
/**
 * @module index.mjs
 * @desc wimijs/index.mjs is a consumable interface to the
 * "What Is Missing In Javascript" library of useful functions
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
 * Usage: In other modules import utils-common.mjs to have functions available
 *        for use throughout project.
 *
 * @example <caption>To Import ALL Methods of Utils</caption>
 * import * as myModule from "/wimijs/index.mjs"
 *
 * // To Use:
 * myModule.wimijFunction()
 * // wimijFunction would be a named Export in this ( index.mjs ) module
 *
 * @example <caption>Import ONLY the common functions desired.</caption>
 * import { wimijFunction } from '/wimijs/index.mjs'
 * // Or import and rename
 * import { wimijFunction as myFunctNow } from '/wimijs/index.mjs'
 *
 * @requires     module:lib/${nameOfFunction.mjs}
 *
 * @param {string} filename Called with import ( filename )
 * @returns {function} From available modules in /lib
 * @throws {ReferenceError} module not found, if file not found
 */

// EXPORTS
/* export { default } from "./lib/function.mjs"
 * anti-pattern to use default exports. However ideally, each module in lib
 * will consist of one function. For the benefits of tree-shaking and other
 * we will attempt to export named and import named functions, with the
 * additional step of renaming them. This renaming can help incase of name
 * collisions when lib is added to by the community. Being consice or curt is
 * traded for maintanibility.
 */

/** @see {@link ./lib/curry.mjs} for Usage.  */
export { curry as curry } from "./lib/curry.mjs"

/** @see {@link ./lib/compareNumbers.mjs} for Usage.  */
export { compareNumbers as compareNumbers } from "./lib/compareNumbers.mjs"


// ERROR

// LOGGING

// TESTING

/** NOTES
*/
