"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var getElementFromArrayByAttribute = function (components, attrName, needle) {
    var element = null;
    lodash_1["default"].each(components, function (el) {
        if (!element && el.$attrs[attrName] === needle) {
            element = el;
        }
    });
    return element;
};
exports.getElementFromArrayByAttribute = getElementFromArrayByAttribute;
var setComponentError = function (component, errors) {
    var ctrl = errors.length > 0;
    var componentx = component;
    componentx.shouldValidate = ctrl;
    componentx.errorBucket = errors;
    componentx.$emit('update:error', ctrl);
};
exports.setComponentError = setComponentError;
