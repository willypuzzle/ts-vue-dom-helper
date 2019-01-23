"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var insert = function (n, arr) {
    var ins = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        ins[_i - 2] = arguments[_i];
    }
    return arr.slice(0, n).concat(ins, arr.slice(n));
};
exports.insert = insert;
