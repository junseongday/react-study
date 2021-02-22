"use strict";
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(10);
console.log(wrapped);
