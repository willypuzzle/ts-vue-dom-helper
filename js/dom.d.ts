declare let getMetaTagContent: (name: any) => any;
export { getMetaTagContent };
declare function makeid(length?: number): any;
declare function loadStylesheet(url: string): void;
declare function generateKernel(kernelUrl: string): HTMLIFrameElement;
declare function generateMainDiv(): string;
export { generateKernel, generateMainDiv, loadStylesheet, makeid };
