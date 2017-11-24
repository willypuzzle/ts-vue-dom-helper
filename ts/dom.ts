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