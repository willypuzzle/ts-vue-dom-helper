import {extend} from 'lodash'

let clone = (obj) : any => {
    if(Array.isArray(obj)){
        return obj.slice(0)
    }else if(obj !== null && typeof obj === 'object'){
        return extend({}, obj);
    }else{
        return obj;
    }
}

let sleep = (delay) => {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function fallbackCopyTextToClipboard(text) {
    let textArea = document.createElement("textarea");
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
        let successful = document.execCommand('copy');
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!(navigator as any).clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    (navigator as any).clipboard.writeText(text).then(function() {
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

export {
    clone,
    sleep,
    copyTextToClipboard
}