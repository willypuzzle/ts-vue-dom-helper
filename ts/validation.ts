import * as validators from 'vuelidate/lib/validators'

const getVuelidateValidator = (key, value) => {
    if(!validators[key]){
        return null;
    }
    let validator = null
    if((key === 'required' && value) || (key === 'email' && value)){
        validator = validators[key]
    }else if(Array.isArray(value)){
        validator = validators[key](...value)
    }else{
        validator = validators[key](value)
    }
    return validator
}

export {
    getVuelidateValidator
}
