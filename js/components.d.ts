import Vue from 'vue';
declare let getElementFromArrayByAttribute: (components: Vue[], attrName: string, needle: string) => Vue;
declare let setComponentError: (component: Vue, errors: string[]) => void;
export { getElementFromArrayByAttribute, setComponentError };
