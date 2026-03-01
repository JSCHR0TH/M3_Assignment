//Author: Jana Schroth
//Application: Coinflip
//Usage: Use nested conditional statements

/*
In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:

Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number:

let randomNum = Math.round(Math.random())

Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
If the result is heads and the user selects heads, display the following message within an alert:
The flip was heads and you chose heads...you win!
If the result is heads and the user selects tails, display the following message within an alert:
The flip was heads but you chose tails...you lose!
If the result is tails and the user selects heads, display the following message within an alert:
The flip was tails but you chose heads...you lose!
If the result is tails and the user selects tails, display the following message within an alert:
The flip was tails and you chose tails...you win!
*/

// VARIABLES

let choice
let coinFlip 
let flipResult
let message1 = "The flip was heads and you chose heads...you win!"
let message2 = "The flip was heads but you chose tails...you lose!"
let message3 = "The flip was tails but you chose heads...you lose!"
let message4 = "The flip was tails and you chose tails...you win!"

// USER PROMPT
choice = confirm ("Select Heads (OK) or Tails (Cancel)")

if (choice === true){
    choice = "Heads"
}else {
    choice = "Tails"
}
console.log(choice)

// COIN FLIP (Heads 1-5)(Tails 6-10)
coinFlip = Math.round(Math.random()*9)+1 ;
console.log(coinFlip)

// DISPLAY RESULT
if (coinFlip <= 5){
    flipResult = "Heads"
    if (flipResult === choice) {
        alert(message1)
    } else {
        alert(message2)
    }
}else {
    flipResult = "Tails"
    if (flipResult === choice) {
        alert(message4)
    } else {
        alert(message3)
    }
}









