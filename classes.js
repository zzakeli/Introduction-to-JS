class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getAge(){
        return this.age;
    }
    
    getName(){
        return this.name;
    }
}

const person = new Person("Paul", 21);

console.log(`${person.name} is ${person.age} years old.`);