function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 3));

const multiplyNumbers = function(a, b) {
    return a * b;
};
console.log(multiplyNumbers(36, 2));

const subtractNumbers = (a, b) => {
    return a - b;
};
console.log(subtractNumbers(96, 52));


function greetUser(name) {
    return "Hello " + name;
}
console.log(greetUser("Mohamed"));

let globalVar = "I am global";

function showScope() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}
showScope();
console.log(globalVar);
// console.log(localVar);