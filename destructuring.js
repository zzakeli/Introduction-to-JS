
//OBJECT DESTRUCTURING
const person  = {name: "Paul", age: 21, height: 8.1};

const {name, height} = person;
console.log(`Name: ${name}, Height: ${height}`);

//ARRAY DESTRUCTURING

const colors = ["Black","Red","Green"];

const [color1,color2,color3] = colors;

console.log(color1,color2,color3);