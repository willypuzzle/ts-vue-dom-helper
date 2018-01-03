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

export {
    clone,
    sleep
}