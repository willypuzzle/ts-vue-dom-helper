import _ from 'lodash'

let clone = (obj) : any => {
    if(Array.isArray(obj)){
        return obj.slice(0)
    }else if(obj !== null && typeof obj === 'object'){
        return _.extend({}, obj);
    }else{
        return obj;
    }
}

export {
    clone
}