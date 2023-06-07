//Arrow Functions

const add = (x,y) => {
    return x + y;
}

console.log(add(10,5));
//15

const square = (x) => {
    return x * x;
}

console.log(square(7));
//49

//Arrow function with no arguments
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDie());
//Random number generated between 1 and 6 whenever the function is called

//Implicit return with arrow functions, work when there is only one statment present inside
const multiply = (x,y) => (
    x*y
)
//replace the curly braces with (), automatically returns 
const cube = (x) => x*x*x
console.log(cube(7));
//343

const isEven = (x) => (
    x % 2 ===0
);

console.log(isEven(256));
//true
console.log(isEven(1023));
//false
