const arrayInArray = ['H', 'e', ['xyz'], 'll', [1, 2], 4]
console.log(arrayInArray[4][1])

const arrayOfNumbers = [1,2,3]
arrayOfNumbers.push(4)
console.log(`Array after adding an element: ${arrayOfNumbers}`)

let poppedElement = arrayOfNumbers.pop()
console.log(`Last and deleted element is: ${poppedElement}`)
console.log(`Array after popping: ${arrayOfNumbers}`)

const newArrayOfNumbers = [4,5,6]
const concatenatedArrays = arrayOfNumbers.concat(newArrayOfNumbers)
console.log(concatenatedArrays)

concatenatedArrays[0] = 10
console.log(concatenatedArrays)

// TASK

const stringArray = ['abc', 'def', 'gh']
console.log(`Entire array of strings consists of: ${stringArray}`)
console.log(`The second element in the array is: ${stringArray[1]}`)

// TASK
stringArray.push('xyz')
console.log(stringArray)
const numberArray = [1, 2, 3]
const stringAndNumberArray = stringArray.concat(numberArray)
console.log(stringAndNumberArray)
stringAndNumberArray[2] = '555'
console.log(stringAndNumberArray)
