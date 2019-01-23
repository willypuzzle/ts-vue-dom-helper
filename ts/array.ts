const insert = (n : number, arr : Array<any>, ...ins) => [...arr.slice(0, n), ...ins, ...arr.slice(n)];

export {
    insert
}

