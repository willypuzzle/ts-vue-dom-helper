import Vue from 'vue';
import _ from 'lodash'

let getElementFromArrayByAttribute = (components : Array<Vue>, attrName : string, needle : string) : Vue => {
    let element = null;
    _.each(components, (el) => {
        if(!element && el.$attrs[attrName] === needle){
            element = el;
        }
    });

    return element
}

let setComponentError = (component : Vue, errors : string[]) => {
    let ctrl = errors.length > 0;

    let componentx : any = <any> component;

    componentx.shouldValidate = ctrl;

    componentx.errorBucket = errors;

    componentx.$emit('update:error', ctrl)
}

export {
    getElementFromArrayByAttribute,
    setComponentError
}