let getMetaTagContent = (name) => {
    let x = document.getElementsByTagName("META");
    for (let i = 0; i < x.length; i++) {
        let el : any = x[i];
        if(el.name === name){
            return el.content;
        }

    }

    return null;
}

export {
    getMetaTagContent
}

import {simpleString} from './random'

function makeid(length : number = 24) {
    return simpleString(length)
}

function loadStylesheet(url : string){
    if(url){
        let link = document.createElement('link');
        link.href = url;
        link.rel = "stylesheet";
        link.type = "text/css";

        document.head.appendChild(link);
    }
}

function generateKernel(kernelUrl : string) : HTMLIFrameElement{
    let ifrm = document.createElement("iframe");
    ifrm.setAttribute('src', kernelUrl);
    ifrm.style.width = "0";
    ifrm.style.height = "0";
    document.body.appendChild(ifrm);

    return ifrm;
}

function generateMainDiv() : string{
    let appId = `app-${makeid()}`
    let appContainer = document.createElement("div");
    appContainer.setAttribute('id', appId);
    document.body.appendChild(appContainer);

    return appId;
}

export {
    generateKernel,
    generateMainDiv,
    loadStylesheet,
    makeid
}
