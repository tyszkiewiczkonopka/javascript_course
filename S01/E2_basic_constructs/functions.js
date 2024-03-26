// WHAT IF?
function sayHello(){
    console.log('Hello!')
}

console.log('She said', sayHello)

// PASSING FUNCTION RESULT AS A VARIABLE 
function sayHello(){
    return 'Hello!'
}

let hello = sayHello()
console.log('She said:', hello)

// TASK: MULTIPLICATION
function multiplication(numberOne, numberTwo){
    return numberOne * numberTwo
}

let numberOne = 3
let numberTwo = 4
let multiplicationResult = multiplication(numberOne, numberTwo)
console.log(`Multiplication result of numbers ${numberOne} and ${numberTwo} is: ${multiplicationResult}`)

// TASK: OPTIONAL PARAMETER
function saySomething(word1, word2, specialCharacter='!'){
    return word1 + ' ' + word2 + ' ' + specialCharacter
}

let something = saySomething('Hello', 'World')
console.log(something)