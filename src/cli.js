#!/usr/bin/env node 
'use strict';
var a = process.argv.slice(2).toString();
 if(!/\S/.test(a)){
   return console.error("Text Cannot Be Empty Spaces")}
  console.log(require("./main.js")(a))
