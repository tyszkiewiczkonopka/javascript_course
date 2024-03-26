const anArray = [1, 4, 'test', false]

for (let index = 0; index < anArray.length; index++) {
    const element = anArray[index]
    console.log('element index:', index, 'value:', element)
};

// TASK

function elementChecker(genre) {
    genre.forEach(element => {
        console.log('Genre:', element)
    })
}
elementChecker(['non-fiction', 'fiction','sci-fi'])