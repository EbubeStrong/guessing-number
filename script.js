// My Number Guessing Mistake Game
// NUMBER GUESSING GAME

// const minNum = 1;
// const maxNum = 100;

// const answer = Math.random() * (maxNum - minNum + 1)

// let attempts = 0;
// let guess;
// let running;

// do{
//     guess = prompt(`Guess a number between ${minNum} - ${maxNum}`);

//     if(guess === NaN || guess === null){
//         alert("Please enter a valid number");
//     }
//     else{
//         if(guess < minNum || guess > maxNum){
//             alert("Incorrect. Please, Try Again!")
//         }
//         else{
//            location.reload(guess)
//         }
//     }
// }while(running)

// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;

const answer =(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);

let attempts = 0;
let guess;
let running = true; // Assign a value to running to ensure the loop executes

do {
    guess = prompt(`Guess a number between ${minNum} - ${maxNum}`);
    // running = false
    if (guess === null) {
        // running = false; // If user clicks cancel, stop the loop
         alert("Please enter a valid number");
    } else if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else {
        attempts++;
        if (guess < minNum || guess > maxNum) {
            alert("Incorrect. Please, Try Again!");
        } else if (guess < answer) {
            alert("Too low. Try again!");
        } else if (guess > answer) {
             alert("Too high. Try again!");
        } else {
            alert(`Congratulations! You guessed the number ${answer} correctly in ${attempts} attempts.`);
            running = false; // Stop the loop after correct guess
        }
    }
//   const guess = parseInt(guess)

console.log(typeof guess, guess)
} while (running);