"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var clone = function (obj) {
    if (Array.isArray(obj)) {
        return obj.slice(0);
    }
    else if (obj !== null && typeof obj === 'object') {
        return lodash_1.extend({}, obj);
    }
    else {
        return obj;
    }
};
exports.clone = clone;
