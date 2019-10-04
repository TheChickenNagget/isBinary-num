"use strict";
module.exports = function(t){
/**
* Detect if number / string is binary number
* @param {string} text
* @example
* var test = require("isbinary-num")
* console.log(test.isBinary("010100101001010010101");
* // outputs "true"
* @returns {boolean} boolean
*/
if (/^[01][01\s]*[01]$/.test(t)) {
return true; 
 }else{
return false; 
  }
 }