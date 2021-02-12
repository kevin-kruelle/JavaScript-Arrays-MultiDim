console.log("...connected");

/* Main Goal:
Create an app fills a 3x3 mulitdimensional array with 'O's and one 'X'. Allow a user to enter coordinates to the 3x3 mulitdimensional array until they find the 'X'

1. Create a multi-dim array
2. prompt the users for input
3. Assign variables to hold that input
4. Create for loop to iterate thru the array
5. nested If-Else to check the user input to the array (Rows and Columns)
6. Allow the user only 3 guesses
    - If the user guesses a previous location, it DOES NOT count against their guesses total
*/

let grid = [
    [ "O", "O", "O"],
    [ "O", "O", "X"],
    [ "O", "O", "O"]
];

let userGuess = [];

// Takes User input and holds it in an array
let xGuess = prompt("Guess an X-Value between 0 - 2")
userGuess.push(xGuess);

let yGuess = prompt("Guess a Y-Value between 0 - 2")
userGuess.push(yGuess);

console.log(userGuess);

let incorrect = 0;

for ( let i = 0; i < grid.length; i++) {
    let row = grid[i];

    for (let j = 0; j < grid[i].length; j++ ) {
        let col = grid[i][j];

        if ( col == "X") {
            console.log( "You guessed correct");
            break;
        }
    }
}

