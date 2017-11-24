"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getMetaTagContent = function (name) {
    var x = document.getElementsByTagName("META");
    for (var i = 0; i < x.length; i++) {
        var el = x[i];
        if (el.name === name) {
            return el.content;
        }
    }
    return null;
};
exports.getMetaTagContent = getMetaTagContent;
