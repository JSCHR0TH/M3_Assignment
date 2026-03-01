//Date: 28 Feb. 2026
//Author: Jana Schroth
//Application: Grade Assigner
//Usage: Use else if or switch statements

/*
The “Grade Assigner” Application

Usage: Use else if or switch statements

Collect the a number between 1 and 100 from the user.
Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console.
*/

let score

score = parseInt(prompt("Enter a score between 1-100:"))
if (score < 1 || score > 100){
    alert("Only  scores between 1 - 100 are accepted. Re-enter score")
}else if (score >= 90){
    console.log('You received an A')
}else if (score >= 80){
    console.log('You received a B')
}else if (score >= 70){
    console.log('You received a C')
}else if (score >= 60){
    console.log('You received a D')
}else {
    console.log('You received an F')
}



