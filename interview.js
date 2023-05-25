const add = (num1, num2) => {
    return num1+num2;
}

console.log("add", add(1,2));

const sum = (...args) => {
    if(args.length === 0) return 0;
    return args.length > 1 ? args.reduce((a,b) => a+b) : args[0];
}

const toLowercase = (string) => {
    return string.toLowerCase();
}
console.log("length", sum());


const stringIncludes = (string, searchItem) => {
    return toLowercase(string).includes(toLowercase(searchItem));
}

console.log("string Includes", stringIncludes("I drove to New York", "new"));

const getNames = (objectArray) => {
    return Array.from(objectArray).map(item => item.name).filter(item => item !== undefined);
}


console.log("getNames", getNames([{name: "John"}, {name: "Jane"}, {}, {a: 1}, {b: 2}, {name: "Bob"}]));


const getLargestNumber = (array) => {
    return array.reduce((max, value) => { return max > value ? max : value }, array.at[-1]);
}
console.log("getLargestNumber", getLargestNumber([7, 1, 41, 12, 9]));



// every function is pure 