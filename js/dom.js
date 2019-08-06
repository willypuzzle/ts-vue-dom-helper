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
var randomstring_1 = require("randomstring");
function makeid(length) {
    if (length === void 0) { length = 24; }
    return randomstring_1.default.generate({
        length: length,
        charset: 'hex',
        capitalization: 'lowercase'
    });
}
exports.makeid = makeid;
function loadStylesheet(url) {
    if (url) {
        var link = document.createElement('link');
        link.href = url;
        link.rel = "stylesheet";
        link.type = "text/css";
        document.head.appendChild(link);
    }
}
exports.loadStylesheet = loadStylesheet;
function generateKernel(kernelUrl) {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute('src', kernelUrl);
    ifrm.style.width = "0";
    ifrm.style.height = "0";
    document.body.appendChild(ifrm);
    return ifrm;
}
exports.generateKernel = generateKernel;
function generateMainDiv() {
    var appId = "app-" + makeid();
    var appContainer = document.createElement("div");
    appContainer.setAttribute('id', appId);
    document.body.appendChild(appContainer);
    return appId;
}
exports.generateMainDiv = generateMainDiv;
