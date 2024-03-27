// TASK 1

function printPlayersState(health) {
    if (health >= 100) {
        console.log('Player is alive and at full health!')
    } else if (health >= 10) {
        console.log('Player is alive and at ok health.')
    } else if (health >= 1) {
        console.log('Player is alive and at very poor health!')
    } else {
        console.log('Player is dead.')
    }
}

printPlayersState(100)
printPlayersState(60)
printPlayersState(0)
printPlayersState(5)
printPlayersState(-1)

// TASK 2

function elementChecker(anArray) {
    anArray.forEach((element, index) => {
        switch (element) {
            case 1:
                console.log(`Element at index ${index} has value one`)
                break
            case 0:
                console.log(`Element at index ${index} has value zero`)
                break
            default:
                console.log(`Element at index ${index} is not supported: ${element}`)
        }

    });
}

elementChecker([1, 2, false, 0, 8, 0, 1, 8, true, 'test', '0'])

import { user } from "./objects.js";
console.log(user['name'])