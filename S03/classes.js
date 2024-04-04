class Human{
    name;
    age = 0;

    constructor(name){
        this.name = name;
    }

    increaseAge(){
        this.age++;
    }

    introduce(){
        console.log(`Hi, my name is ${this.name} and my age is ${this.age}.`);
    }
}

const bob = new Human('Bob');
bob.increaseAge();
bob.increaseAge();
bob.introduce();