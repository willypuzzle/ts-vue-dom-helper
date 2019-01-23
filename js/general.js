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
var sleep = function (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay)
        ;
};
exports.sleep = sleep;
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand('copy');
    }
    catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}
exports.copyTextToClipboard = copyTextToClipboard;
