let name = 'Rohit';
const age = 21;

name = 'Sharif';

console.log(name, age);

//Use template literals with variables
let user = 'Rohit';

let message = `Hello, ${user}! Welcome to JavaScript.`;

console.log(message);

//function with default parameter values
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet('Rohit'));