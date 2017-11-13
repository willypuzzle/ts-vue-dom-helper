"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var clone = function (obj) {
    if (Array.isArray(obj)) {
        return obj.slice(0);
    }
    else if (obj !== null && typeof obj === 'object') {
        return lodash_1["default"].extend({}, obj);
    }
    else {
        return obj;
    }
};
exports.clone = clone;
