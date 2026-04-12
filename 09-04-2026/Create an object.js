let person = {
    name: "Mohamed Sherif",
    age: 21,
    sayHello: function() {
        return "Hello, my name is " + this.name;
    }
};
console.log(person.sayHello());

//Access and modify object properties

console.log(person.name); 
person.age = 22; 
console.log(person.age);



