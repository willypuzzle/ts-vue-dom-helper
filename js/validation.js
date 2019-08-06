"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validators = require("vuelidate/lib/validators");
var getVuelidateValidator = function (key, value) {
    if (!validators[key]) {
        return null;
    }
    var validator = null;
    if ((key === 'required' && value) || (key === 'email' && value)) {
        validator = validators[key];
    }
    else if (Array.isArray(value)) {
        validator = validators[key].apply(validators, value);
    }
    else {
        validator = validators[key](value);
    }
    return validator;
};
exports.getVuelidateValidator = getVuelidateValidator;
