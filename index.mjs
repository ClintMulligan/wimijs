// index.mjs

// "use strict" // Uncomment for transpiling

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
 */

// EXPORTS
export { default as curry } from "./lib/curry.mjs"

// ERROR

// LOGGING

// TESTING












// EXPORTS
// NO export default unless low level util function with one output
export const propertyVar = "A"
export { foo }
// Import direct to Export shortcut
export { default as moduleOne } from "./modules/module.mjs"

// IMPORTS
import { default as moduleBar } from "./bar.mjs"
import { bar } from "foo.mjs"
import { bar1, baz } from "foo.mjs"
import { bar2 as baz1 } from "foo.mjs"

// Variables
/** @default 1 @type {number} */
const n = 1

/**
 * Repeat <tt>str</tt> several times.
 * @param {number} n 1st number
 * @param {number} m 2nd number
 * @return {number} n+m
 * @throws {exceptionType} description
 */

const hn = require("@datafire/hacker_news").create()(async () => {
  const users = await Promise.all(
    [hn.getUser({ "username": "sama" }), hn.getUser({ "username": "pg" })]
  )

  const [more, less] = users.sort((a, b) => b.karma - a.karma)

  console.log(`${more.id} has more karma (${more.karma}) than ${less.id} 
  (${less.karma})`)
})()

/**
 * @module Utils Common Functions
 * @desc Contains functions to enhance readability or performance of code.
 * @license
 * MIT License
 *
 * Copyright (c) 2018 Ray (Clinton) Mulligan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Utils
 *
 * Usage: In other modules import utils-common.mjs to have functions available
 *        for use throughout project.
 *
 * @example <caption>To Import ALL Methods of Utils</caption>
 * import * as myModule from "/modules/util-common.mjs"
 *
 * // To Use:
 * myModule.utilFunction()
 * // utilFunction would be a named Method in this (utils-common.mjs) module
 *
 * @example <caption>Import ONLY the common functions desired.</caption>
 * import {utilFunction} from '/modules/utils-common.mjs'
 * // Or import and rename
 * import { utilFunction as myCommonFunct } from '/modules/utils-common.mjs'
 */
